import { useState } from "react";
import { useNavigate } from "react-router-dom";

const topics = [
  "Data Structures",
  "Algorithms",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
  "LLD",
  "HLD",
  "Behavioral",
];

export default function MockInterview() {
  const navigate = useNavigate();

  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");

  const handleStart = () => {
    if (!topic) {
      alert("Select a topic");
      return;
    }

    navigate("/interview-room", {
      state: {
        topic,
        difficulty,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] p-10">
      <h1 className="text-4xl font-bold mb-3">
        AI Mock Interview
      </h1>

      <p className="text-gray-500 mb-10">
        Choose a topic and begin.
      </p>

      <div className="grid md:grid-cols-4 gap-4">
        {topics.map((item) => (
          <button
            key={item}
            onClick={() => setTopic(item)}
            className={`p-5 rounded-2xl border transition ${
              topic === item
                ? "bg-black text-white"
                : "bg-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <select
        value={difficulty}
        onChange={(e) =>
          setDifficulty(e.target.value)
        }
        className="mt-8 border p-3 rounded-xl"
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <button
        onClick={handleStart}
        className="block mt-8 bg-black text-white px-8 py-4 rounded-xl"
      >
        Start Interview
      </button>
    </div>
  );
}