import express from "express";
import multer from "multer";
import fs from "fs";
import dotenv from "dotenv";
import { createRequire } from "module";

dotenv.config();

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post(
  "/analyze",
  upload.single("resume"),
  async (req, res) => {
    try {
      console.log("====== ROUTE HIT ======");

      if (!req.file) {
        return res.status(400).json({
          message: "Resume not uploaded",
        });
      }

      console.log("File Received:", req.file.originalname);

      // Read PDF
      const dataBuffer = fs.readFileSync(req.file.path);

      // Extract PDF Text
      const pdfData = await pdfParse(dataBuffer);

      const resumeText = pdfData.text;

      console.log("====== PDF EXTRACTED ======");
      console.log(resumeText.substring(0, 300));

      const prompt = `
You are an ATS Resume Analyzer.

Analyze the following resume and return ONLY valid JSON.

Expected JSON format:

{
  "atsScore": 0,
  "summary": "",
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Rules:
- atsScore should be between 0 and 100
- strengths should contain positive points
- weaknesses should contain improvement areas
- suggestions should contain actionable recommendations
- Return ONLY JSON
- No markdown
- No explanations outside JSON

Resume:

${resumeText}
`;

      console.log("Calling Groq...");

      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESUME_ANALYSER}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            temperature: 0.2,
            messages: [
              {
                role: "user",
                content: prompt,
              },
            ],
          }),
        }
      );

      const result = await response.json();

      console.log("====== GROQ RESPONSE ======");
      console.log(JSON.stringify(result, null, 2));

      if (!result.choices) {
        return res.status(500).json({
          message: "Groq API Error",
          error: result,
        });
      }

      let aiResponse =
        result.choices[0].message.content;

      // Remove markdown wrappers if present
      aiResponse = aiResponse
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      console.log("====== CLEANED AI RESPONSE ======");
      console.log(aiResponse);

      const parsedResponse = JSON.parse(aiResponse);

      return res.status(200).json(parsedResponse);

    } catch (err) {
      console.error("====== FULL ERROR ======");
      console.error(err);

      return res.status(500).json({
        message: err.message,
      });
    }
  }
);

export default router;