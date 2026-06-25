import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function InterviewRoom() {
  const navigate = useNavigate();
  const location = useLocation();

  const { topic, difficulty } =
    location.state || {};

  const videoRef = useRef(null);

  const [questions, setQuestions] =
    useState([]);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [spokenAnswer, setSpokenAnswer] =
    useState("");

  const [codeAnswer, setCodeAnswer] =
    useState("");

  const [responses, setResponses] =
    useState([]);

  /*
  =====================================
  Camera
  =====================================
  */

  const startCamera = async () => {
    try {
      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

      if (videoRef.current) {
        videoRef.current.srcObject =
          stream;
      }
    } catch (err) {
      console.error(err);
    }
  };

  /*
  =====================================
  Questions
  =====================================
  */

  const fetchQuestions = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/interview/questions",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            topic,
            difficulty,
          }),
        }
      );

      const data =
        await response.json();

      setQuestions(
        data.questions || []
      );
    } catch (err) {
      console.error(err);
    }
  };

  /*
  =====================================
  Initialize
  =====================================
  */

  useEffect(() => {
    const initialize = async () => {
      if (!topic || !difficulty) {
        navigate("/mock-interview");
        return;
      }

      await startCamera();
      await fetchQuestions();
    };

    initialize();
  }, []);

  /*
  =====================================
  Save Answer
  =====================================
  */

  const saveCurrentAnswer = () => {
    const current =
      questions[currentQuestion];

    if (!current) return null;

    return {
      question:
        current.question,

      spokenAnswer,

      codeAnswer,
    };
  };

  /*
  =====================================
  Finish Interview
  =====================================
  */

  const finishInterview = async () => {
    try {
      const finalResponses = [
        ...responses,
        saveCurrentAnswer(),
      ];

      const response = await fetch(
        "http://localhost:5000/api/interview/evaluate",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            responses:
              finalResponses,
          }),
        }
      );

      const result =
        await response.json();

      navigate(
        "/interview-result",
        {
          state: result,
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  /*
  =====================================
  Next Question
  =====================================
  */

  const nextQuestion = () => {
    const answer =
      saveCurrentAnswer();

    if (answer) {
      setResponses((prev) => [
        ...prev,
        answer,
      ]);
    }

    setSpokenAnswer("");
    setCodeAnswer("");

    if (
      currentQuestion ===
      questions.length - 1
    ) {
      finishInterview();
      return;
    }

    setCurrentQuestion(
      (prev) => prev + 1
    );
  };

  if (questions.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Loading Interview...
        </h2>
      </div>
    );
  }

  const current =
    questions[currentQuestion];

  return (
    <div className="min-h-screen bg-[#f5f5f5] p-6">
      <div className="grid grid-cols-2 gap-6 h-full">

        {/* Question Panel */}

        <div className="bg-white rounded-3xl p-8 overflow-y-auto">

          <h2 className="text-3xl font-bold">
            {topic}
          </h2>

          <p className="text-gray-500 mb-8">
            {difficulty}
          </p>

          <div className="bg-gray-100 rounded-2xl p-6">
            <h3 className="font-semibold mb-3">
              Question {currentQuestion + 1}
            </h3>

            <p className="text-lg">
              {current.question}
            </p>
          </div>

          {/* Spoken Answer */}

          <div className="mt-6">
            <label className="font-medium block mb-2">
              Spoken Answer
            </label>

            <textarea
              value={spokenAnswer}
              onChange={(e) =>
                setSpokenAnswer(
                  e.target.value
                )
              }
              placeholder="Explain your answer..."
              className="w-full h-40 border rounded-xl p-4"
            />
          </div>

          {/* Code Answer */}

          <div className="mt-6">
            <label className="font-medium block mb-2">
              Code Answer (Optional)
            </label>

            <textarea
              value={codeAnswer}
              onChange={(e) =>
                setCodeAnswer(
                  e.target.value
                )
              }
              placeholder="Write code if required..."
              className="w-full h-72 border rounded-xl p-4 font-mono"
            />
          </div>

          <button
            onClick={nextQuestion}
            className="mt-8 bg-black text-white px-6 py-3 rounded-xl"
          >
            {currentQuestion ===
            questions.length - 1
              ? "Finish Interview"
              : "Next Question"}
          </button>
        </div>

        {/* Webcam */}

        <div className="bg-white rounded-3xl p-6">
          <video
            ref={videoRef}
            autoPlay
            muted
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>

      </div>
    </div>
  );
}
