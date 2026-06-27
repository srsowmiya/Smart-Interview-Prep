import express from "express";

const router = express.Router();

/*
===========================================
Generate One Aptitude Question
===========================================
*/

router.post("/question", async (req, res) => {
  try {
    const { topic, difficulty } = req.body;

    const prompt = `
Generate ONE ${difficulty} aptitude question from ${topic}.

Rules:

1. Return ONLY JSON.
2. Don't add markdown.
3. Question should not be too easy.
4. Include the exact answer.

Example:

{
  "question":"A train travels 120 km in 2 hours. Find its speed.",
  "answer":"60"
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
          temperature: 0.7,
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const result =
      await response.json();

    let content =
      result.choices[0].message.content;

    content = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const question =
      JSON.parse(content);

    res.json(question);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
});

/*
===========================================
Check User Answer
===========================================
*/

router.post("/check", async (req, res) => {
  try {
    const {
      question,
      correctAnswer,
      userAnswer,
    } = req.body;

    const prompt = `
You are an aptitude tutor.

Question:
${question}

Correct Answer:
${correctAnswer}

Student Answer:
${userAnswer}

Evaluate the student's answer.

Rules:

1. If the answer is correct, congratulate them.
2. If wrong, DO NOT reveal the answer immediately.
3. Give only ONE hint.
4. Give a detailed explanation.
5. Return ONLY JSON.

Example:

{
  "correct": false,
  "feedback":"Not quite!",
  "hint":"Use the percentage formula first.",
  "explanation":"To solve this, first calculate..."
}
`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          model:
            "llama-3.3-70b-versatile",
          temperature: 0.3,
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const result =
      await response.json();

    let content =
      result.choices[0].message.content;

    content = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const evaluation =
      JSON.parse(content);

    res.json(evaluation);

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
});

export default router;