import { useState } from "react";

import {
  generateQuestion,
  checkAnswer,
} from "./aptitudeApi";

const topics = [
  "Number System",
  "Percentages",
  "Profit & Loss",
  "Ratio & Proportion",
  "Average",
  "Time & Work",
  "Time Speed Distance",
  "Simple Interest",
  "Compound Interest",
  "Probability",
  "Permutation & Combination",
  "Mixtures",
  "Age",
  "Calendar",
  "Clock",
];

const difficulties = [
  "Easy",
  "Medium",
  "Hard",
];

export default function AptitudePractice() {
  const [topic, setTopic] =
    useState("");

  const [difficulty, setDifficulty] =
    useState("Medium");

  const [started, setStarted] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [question, setQuestion] =
    useState(null);

  const [answer, setAnswer] =
    useState("");

  const [feedback, setFeedback] =
    useState("");

  const [hint, setHint] =
    useState("");

  const [explanation, setExplanation] =
    useState("");

  const [correct, setCorrect] =
    useState(false);

  const startPractice =
    async () => {
      if (!topic) {
        alert(
          "Please select a topic."
        );
        return;
      }

      try {
        setLoading(true);

        const data =
          await generateQuestion(
            topic,
            difficulty
          );

        setQuestion(data);

        setStarted(true);

        setAnswer("");

        setFeedback("");

        setHint("");

        setExplanation("");

        setCorrect(false);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

  const submitAnswer =
    async () => {
      if (!answer.trim()) return;

      try {
        setLoading(true);

        const result =
          await checkAnswer(
            question.question,
            question.answer,
            answer
          );

        setFeedback(
          result.feedback
        );

        setHint(
          result.hint
        );

        setExplanation(
          result.explanation
        );

        setCorrect(
          result.correct
        );
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

  const nextQuestion =
    async () => {
      try {
        setLoading(true);

        const data =
          await generateQuestion(
            topic,
            difficulty
          );

        setQuestion(data);

        setAnswer("");

        setFeedback("");

        setHint("");

        setExplanation("");

        setCorrect(false);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const skipQuestion = async () => {
  try {
    setLoading(true);

    const data = await generateQuestion(
      topic,
      difficulty
    );

    setQuestion(data);

    setAnswer("");
    setFeedback("");
    setHint("");
    setExplanation("");
    setCorrect(false);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};

      if (!started) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] p-10">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl font-bold mb-2">
            Aptitude Practice
          </h1>

          <p className="text-gray-500 mb-10">
            Practice aptitude with instant AI feedback.
          </p>

          <h2 className="text-xl font-semibold mb-5">
            Select Topic
          </h2>

          <div className="grid md:grid-cols-4 gap-5">

            {topics.map((item) => (

              <button
                key={item}
                onClick={() => setTopic(item)}
                className={`p-6 rounded-3xl border transition text-left ${
                  topic === item
                    ? "bg-black text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >

                <h3 className="font-semibold">
                  {item}
                </h3>

              </button>

            ))}

          </div>

          <div className="mt-8">

            <label className="block mb-2 font-semibold">
              Difficulty
            </label>

            <select
              value={difficulty}
              onChange={(e) =>
                setDifficulty(e.target.value)
              }
              className="px-4 py-3 rounded-xl border bg-white"
            >
              {difficulties.map((item) => (

                <option key={item}>
                  {item}
                </option>

              ))}
            </select>

          </div>

          <button
            onClick={startPractice}
            disabled={loading}
            className="mt-8 bg-black text-white px-8 py-4 rounded-xl"
          >
            {loading
              ? "Generating..."
              : "Start Practice"}
          </button>

        </div>

      </div>
    );
  }

    return (
    <div className="min-h-screen bg-[#f5f5f5] p-10">

      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold">
              {topic}
            </h1>

            <p className="text-gray-500">
              Difficulty : {difficulty}
            </p>

          </div>

        </div>

        {/* Question */}

        <div className="bg-white rounded-3xl shadow-sm p-8">

          <h2 className="text-xl font-semibold mb-6">
            Question
          </h2>

          <p className="text-lg leading-8">
            {question?.question}
          </p>

        </div>

        {/* Answer */}

        <div className="bg-white rounded-3xl shadow-sm p-8 mt-6">

          <label className="font-semibold block mb-3">
            Your Answer
          </label>

          <textarea
            rows={6}
            value={answer}
            onChange={(e) =>
              setAnswer(e.target.value)
            }
            placeholder="Type your answer here..."
            className="w-full border rounded-2xl p-4 resize-none outline-none"
          />

          <button
            onClick={submitAnswer}
            disabled={loading}
            className="mt-6 bg-black text-white px-8 py-3 rounded-xl"
          >
            {loading
              ? "Checking..."
              : "Submit"}
          </button>
           <button
    onClick={skipQuestion}
    className="border px-8 py-3 rounded-xl hover:bg-gray-100"
  >
    Skip
  </button>


        </div>

        {/* AI Feedback */}

        {feedback && (

          <div
            className={`mt-6 rounded-3xl p-8 shadow-sm ${
              correct
                ? "bg-green-50"
                : "bg-red-50"
            }`}
          >

            <h2 className="text-xl font-bold mb-3">

              {correct
                ? "✅ Correct!"
                : "❌ Incorrect"}

            </h2>

            <p>
              {feedback}
            </p>

          </div>

        )}

        {/* Hint */}

        {!correct && hint && (

          <div className="bg-yellow-50 rounded-3xl p-8 shadow-sm mt-6">

            <h2 className="text-xl font-bold mb-3">
              💡 Hint
            </h2>

            <p>
              {hint}
            </p>

          </div>

        )}

        {/* Explanation */}

        {explanation && (

          <div className="bg-blue-50 rounded-3xl p-8 shadow-sm mt-6">

            <h2 className="text-xl font-bold mb-3">
              📘 Explanation
            </h2>

            <p className="leading-8">
              {explanation}
            </p>

          </div>

        )}

        {/* Next */}

        {correct && (

          <button
            onClick={nextQuestion}
            className="mt-8 bg-black text-white px-8 py-4 rounded-xl"
          >
            Next Question
          </button>

        )}

      </div>

    </div>
  );
}