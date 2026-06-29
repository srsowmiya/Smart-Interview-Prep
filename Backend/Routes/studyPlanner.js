import express from "express";

const router = express.Router();

/*
===========================================
Generate Study Plan
===========================================
*/

router.post("/generate", async (req, res) => {
  try {
    const { goal } = req.body;

    const prompt = `
You are an expert study planner.

The student wants to learn:

${goal}

Generate a study timetable.

Rules:

1. Start from 09:00 AM.
2. Finish at 09:00 PM.
3. Include breaks.
4. Balance difficult and easy subjects.
5. Return ONLY JSON.

Example:

{
  "schedule":[
    {
      "time":"09:00 - 10:00",
      "task":"React Basics"
    },
    {
      "time":"10:00 - 11:00",
      "task":"React Components"
    },
    {
      "time":"11:00 - 12:00",
      "task":"Break"
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
          temperature: 0.5,
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

    let content =
      result.choices[0].message.content;

    content = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const studyPlan =
      JSON.parse(content);

    res.status(200).json(studyPlan);

      } catch (err) {

    console.error(
      "Study Planner Error:"
    );

    console.error(err);

    res.status(500).json({
      message: err.message,
    });

  }
});

export default router;