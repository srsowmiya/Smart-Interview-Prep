import express from "express";

const router = express.Router();

router.post("/questions", async (req, res) => {
  try {
    const { topic, difficulty } = req.body;

    const prompt = `
Generate 5 ${difficulty} level interview questions for ${topic}.

Each question must contain a type.

Rules:

- Theory questions => spoken
- Coding questions => coding

Return ONLY valid JSON.

{
  "questions":[
    {
      "question":"Explain ACID properties.",
      "type":"spoken"
    },
    {
      "question":"Reverse a linked list.",
      "type":"coding"
    }
  ]
}
`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
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
          temperature: 0.5,
        }),
      }
    );

    const result = await response.json();

    const content =
      result.choices[0].message.content;

    console.log("RAW RESPONSE:");
    console.log(content);

    const cleaned = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const questions = JSON.parse(cleaned);

    res.status(200).json(questions);
  } catch (err) {
    console.error("ERROR:", err);

    res.status(500).json({
      message: err.message,
    });
  }
});

export default router;