const BASE_URL =
  "http://localhost:5000/api/studyplanner";

export const generateStudyPlan =
  async (goal) => {
    const response = await fetch(
      `${BASE_URL}/generate`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          goal,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to generate study plan."
      );
    }

    return response.json();
  };