import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function InterviewRoom() {
  const navigate = useNavigate();

  const location = useLocation();

  const { topic, difficulty } =
    location.state || {};

  const videoRef = useRef(null);

  const [questions, setQuestions] = useState([]);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [codeAnswer, setCodeAnswer] =
    useState("");

  const [spokenAnswer, setSpokenAnswer] =
    useState("");

  const [responses, setResponses] =
    useState([]);

  useEffect(() => {
    startInterview();
  }, []);

  const startInterview = async () => {
    await startCamera();
    await fetchQuestions();
  };

  const fetchQuestions = async () => {
    const response = await fetch(
      "http://localhost:5000/api/interview/questions",
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

    const data = await response.json();

    setQuestions(data.questions || []);
  };

  const startCamera = async () => {
    const stream =
      await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  };

  const saveCurrentAnswer = () => {
    const current =
      questions[currentQuestion];

    if (!current) return;

    setResponses((prev) => [
      ...prev,
      {
        question: current.question,
        type: current.type,
        answer:
          current.type === "coding"
            ? codeAnswer
            : spokenAnswer,
      },
    ]);
  };

  const nextQuestion = () => {
    saveCurrentAnswer();

    setCodeAnswer("");
    setSpokenAnswer("");

    if (
      currentQuestion ===
      questions.length - 1
    ) {
      navigate("/interview-result", {
        state: {
          responses,
        },
      });

      return;
    }

    setCurrentQuestion((prev) => prev + 1);
  };

  const current =
    questions[currentQuestion];

  return (
    <div className="h-screen bg-[#f5f5f5] p-6">
      <div className="grid grid-cols-2 gap-6 h-full">

        {/* Left Side */}

        <div className="bg-white rounded-3xl p-8 overflow-y-auto">

          <h2 className="text-2xl font-bold">
            {topic}
          </h2>

          <p className="text-gray-500 mb-8">
            {difficulty}
          </p>

          {current && (
            <>
              <div className="bg-gray-100 rounded-2xl p-6">

                <h3 className="font-semibold mb-3">
                  Question {currentQuestion + 1}
                </h3>

                <p className="text-lg">
                  {current.question}
                </p>

              </div>

              {current.type === "spoken" ? (
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
                    placeholder="Transcript will appear here..."
                    className="w-full h-48 border rounded-xl p-4"
                  />

                </div>
              ) : (
                <div className="mt-6">

                  <label className="font-medium block mb-2">
                    Coding Answer
                  </label>

                  <textarea
                    value={codeAnswer}
                    onChange={(e) =>
                      setCodeAnswer(
                        e.target.value
                      )
                    }
                    placeholder="Write your code here..."
                    className="w-full h-72 border rounded-xl p-4 font-mono"
                  />

                </div>
              )}

              <button
                onClick={nextQuestion}
                className="mt-8 bg-black text-white px-6 py-3 rounded-xl"
              >
                {currentQuestion ===
                questions.length - 1
                  ? "Finish Interview"
                  : "Next Question"}
              </button>
            </>
          )}

        </div>

        {/* Right Side */}

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