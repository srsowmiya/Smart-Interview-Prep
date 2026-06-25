import express from "express";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Generate Interview Questions
|--------------------------------------------------------------------------
*/

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
  "questions": [
    {
      "question": "Explain ACID Properties",
      "type": "spoken"
    },
    {
      "question": "Reverse a Linked List",
      "type": "coding"
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

    console.log("RAW QUESTIONS:");
    console.log(content);

    const cleaned = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const questions =
      JSON.parse(cleaned);

    res.status(200).json(questions);
  } catch (err) {
    console.error("QUESTION ERROR:");
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
});

/*
|--------------------------------------------------------------------------
| Evaluate Interview
|--------------------------------------------------------------------------
*/

router.post("/evaluate", async (req, res) => {
  try {
    const { responses } = req.body;

const prompt = `
You are a Senior Technical Interviewer.

Evaluate the candidate's answers.

Each answer may contain:
- spokenAnswer
- codeAnswer
- both

Evaluate using BOTH if available.

Technical Depth:
- correctness
- concepts
- keywords used

Communication:
- clarity
- structure
- explanation quality

Coding:
- correctness
- time complexity
- space complexity
- edge cases

Return ONLY valid JSON.

{
  "technicalScore":85,
  "communicationScore":80,
  "confidenceScore":78,
  "strengths":[
    "Good understanding of DBMS"
  ],
  "weaknesses":[
    "Missed edge cases"
  ],
  "suggestions":[
    "Explain concepts more deeply"
  ]
}

Responses:

${JSON.stringify(responses,null,2)}
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
          temperature: 0.3,
        }),
      }
    );

    const result = await response.json();

    const content =
      result.choices[0].message.content;

    console.log("RAW EVALUATION:");
    console.log(content);

    const cleaned = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const evaluation =
      JSON.parse(cleaned);

    res.status(200).json(evaluation);
  } catch (err) {
    console.error("EVALUATION ERROR:");
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
});

export default router;