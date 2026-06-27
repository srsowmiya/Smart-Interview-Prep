const BASE_URL = "http://localhost:5000/api/aptitude";

export const generateQuestion = async (
  topic,
  difficulty
) => {
  const response = await fetch(
    `${BASE_URL}/question`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic,
        difficulty,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to generate question");
  }

  return response.json();
};

export const checkAnswer = async (
  question,
  correctAnswer,
  userAnswer
) => {
  const response = await fetch(
    `${BASE_URL}/check`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question,
        correctAnswer,
        userAnswer,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to check answer");
  }

  return response.json();
};