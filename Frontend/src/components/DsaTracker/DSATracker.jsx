import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getProblems,
  toggleProblem,
} from "./dsaApi";

export default function DSATracker() {
  const [problems, setProblems] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const fetchProblems =
    async () => {
      try {
        const data =
          await getProblems();

        setProblems(data);
      } catch (err) {
        console.error(err);
      }
    };

  useEffect(() => {
    const loadProblems =
      async () => {
        await fetchProblems();
      };

    loadProblems();
  }, []);

  const groupedProblems =
    useMemo(() => {
      const filtered =
        problems.filter((problem) =>
          problem.title
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            )
        );

      return filtered.reduce(
        (acc, problem) => {
          if (
            !acc[problem.topic]
          ) {
            acc[problem.topic] =
              [];
          }

          acc[problem.topic].push(
            problem
          );

          return acc;
        },
        {}
      );
    }, [problems, search]);

  const solved =
    problems.filter(
      (problem) =>
        problem.completed
    ).length;

  const progress =
    problems.length > 0
      ? (
          (solved /
            problems.length) *
          100
        ).toFixed(1)
      : 0;

  const handleToggle =
    async (id) => {
      try {
        await toggleProblem(id);

        fetchProblems();
      } catch (err) {
        console.error(err);
      }
    };

  return (
    <div className="min-h-screen bg-[#f5f5f5] p-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <h1 className="text-4xl font-bold mb-2">
          DSA Tracker
        </h1>

        <p className="text-gray-500 mb-8">
          Track your DSA progress
        </p>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-5 mb-8">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500">
              Total Problems
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {problems.length}
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500">
              Solved
            </p>

            <h2 className="text-3xl font-bold text-green-600 mt-2">
              {solved}
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <p className="text-gray-500">
              Progress
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {progress}%
            </h2>
          </div>

        </div>

        {/* Progress Bar */}

        <div className="w-full bg-gray-200 rounded-full h-3 mb-8">

          <div
            className="bg-green-500 h-3 rounded-full"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        {/* Search */}

        <input
          type="text"
          placeholder="Search Problems..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="w-full bg-white border rounded-xl p-4 mb-8 shadow-sm outline-none"
        />

        {/* Categories */}

        {Object.entries(
          groupedProblems
        ).map(
          ([topic, list]) => (

            <div
              key={topic}
              className="mb-10"
            >

              {/* Topic Header */}

              <div className="bg-white rounded-xl px-5 py-4 shadow-sm mb-4">

  <h2 className="text-2xl font-bold">
     {topic} ({list.length})
  </h2>

</div>

              {/* Table */}
<div className="overflow-hidden rounded-2xl shadow-md">

  <table className="w-full">

    <thead className="bg-black text-white">

      <tr>

        <th className="p-4">
          Done
        </th>

        <th className="p-4 text-left">
          Problem
        </th>

        <th className="p-4">
          Difficulty
        </th>

        <th className="p-4">
          Platform
        </th>

        <th className="p-4">
          Link
        </th>

      </tr>

    </thead>

    <tbody>

      {list.map((problem) => (

        <tr
          key={problem.id}
          className="bg-[#18181B] text-white border-t border-gray-700 hover:bg-[#27272A] transition"
        >

          <td className="text-center p-4">

            <input
              type="checkbox"
              checked={problem.completed}
              onChange={() =>
                handleToggle(problem.id)
              }
            />

          </td>

          <td className="p-4 font-medium">
            {problem.title}
          </td>

          <td className="text-center p-4">

            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                problem.difficulty === "Easy"
                  ? "bg-green-900 text-green-300"
                  : problem.difficulty === "Medium"
                  ? "bg-yellow-900 text-yellow-300"
                  : "bg-red-900 text-red-300"
              }`}
            >
              {problem.difficulty}
            </span>

          </td>

          <td className="text-center p-4 text-gray-300">
            {problem.platform}
          </td>

          <td className="text-center p-4">

            <a
              href={problem.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Solve
            </a>

          </td>

        </tr>

      ))}

    </tbody>

  </table>

</div>

            </div>
          )
        )}

      </div>

    </div>
  );
}