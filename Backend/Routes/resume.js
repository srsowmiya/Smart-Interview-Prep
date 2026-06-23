import express from "express";
import multer from "multer";
import pdfParse from "pdf-parse";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post(
  "/analyze",
  upload.single("resume"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          message: "Resume not uploaded",
        });
      }

      // Read PDF
      const dataBuffer = fs.readFileSync(req.file.path);

      // Extract Text
      const pdfData = await pdfParse(dataBuffer);

      const resumeText = pdfData.text;

      const prompt = `
You are an ATS Resume Analyzer.

Analyze this resume and return ONLY valid JSON.

{
  "atsScore": number,
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Resume:

${resumeText}
`;

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
            messages: [
              {
                role: "user",
                content: prompt,
              },
            ],
            temperature: 0.2,
          }),
        }
      );

      const result = await response.json();

      const aiResponse =
        result.choices[0].message.content;

      return res.status(200).json(
        JSON.parse(aiResponse)
      );
    } catch (err) {
      console.error(err);

      return res.status(500).json({
        message: err.message,
      });
    }
  }
);

export default router;