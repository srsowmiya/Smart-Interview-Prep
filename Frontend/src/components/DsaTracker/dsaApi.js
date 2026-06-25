const BASE_URL =
  "http://localhost:5000/api/dsa";

export const getProblems =
  async () => {
    const response = await fetch(
      `${BASE_URL}/problems`
    );

    return response.json();
  };

export const toggleProblem =
  async (problemId) => {
    const response = await fetch(
      `${BASE_URL}/toggle`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          problemId,
        }),
      }
    );

    return response.json();
  };