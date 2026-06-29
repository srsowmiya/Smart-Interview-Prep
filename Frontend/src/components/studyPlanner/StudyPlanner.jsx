import { useState } from "react";
import { generateStudyPlan } from "./studyPlannerApi";

const timeSlots = [
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 01:00",
  "01:00 - 02:00",
  "02:00 - 03:00",
  "03:00 - 04:00",
  "04:00 - 05:00",
  "05:00 - 06:00",
  "06:00 - 07:00",
  "07:00 - 08:00",
  "08:00 - 09:00",
];

export default function StudyPlanner() {

  const [schedule, setSchedule] = useState(
    timeSlots.map((time) => ({
      time,
      task: "",
    }))
  );

  const [todos, setTodos] = useState([
    {
      text: "",
      completed: false,
    },
  ]);

  const [goal, setGoal] = useState("");

  const [loading, setLoading] =
    useState(false);

  const updateTask = (
    index,
    value
  ) => {
    const updated = [...schedule];

    updated[index].task = value;

    setSchedule(updated);
  };

  const updateTodo = (
    index,
    value
  ) => {
    const updated = [...todos];

    updated[index].text = value;

    setTodos(updated);
  };

  const toggleTodo = (
    index
  ) => {
    const updated = [...todos];

    updated[index].completed =
      !updated[index].completed;

    setTodos(updated);
  };

  const deleteTodo = (
    index
  ) => {
    setTodos(
      todos.filter(
        (_, i) => i !== index
      )
    );
  };

  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      {
        text: "",
        completed: false,
      },
    ]);
  };

    const generatePlan =
    async () => {

      if (!goal.trim()) {
        alert(
          "Please enter what you want to learn."
        );

        return;
      }

      try {

        setLoading(true);

        const result =
          await generateStudyPlan(
            goal
          );

        const updatedSchedule =
          timeSlots.map(
            (time, index) => ({
              time,
              task:
                result.schedule?.[
                  index
                ]?.task || "",
            })
          );

        setSchedule(
          updatedSchedule
        );

      } catch (err) {

        console.error(err);

        alert(
          "Failed to generate study plan."
        );

      } finally {

        setLoading(false);

      }

    };

  const clearSchedule =
    () => {

      setSchedule(
        timeSlots.map(
          (time) => ({
            time,
            task: "",
          })
        )
      );

    };

  return (

    <div className="min-h-screen bg-[#f5f5f5] p-8">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="mb-8">

          <h1 className="text-4xl font-bold">
            Study Planner
          </h1>

          <p className="text-gray-500 mt-2">
            Plan your day with AI.
          </p>

        </div>

        <div className="grid grid-cols-12 gap-8">

          {/* ============================
                LEFT PANEL
          ============================ */}

          <div className="col-span-8">

           <div className="bg-[#111827] rounded-3xl shadow-lg p-6 text-white">

              <div className="flex justify-between items-center mb-6">

               <h2 className="text-2xl font-bold">
   Today's Schedule
</h2>

                <button
                  onClick={clearSchedule}
                 className="px-5 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white transition"
                >
                  Clear
                </button>

              </div>

              <div className="space-y-4">

                {schedule.map(
                  (slot, index) => (

                    <div
                      key={index}
                      className="grid grid-cols-12 gap-4 items-center"
                    >

                      <div className="col-span-3">

                        <div  className="bg-black rounded-xl py-3 text-center font-semibold border border-gray-700 text-white">

                          {slot.time}

                        </div>

                      </div>

                      <div className="col-span-9">

                        <input
                          type="text"
                          value={slot.task}
                          onChange={(e) =>
                            updateTask(
                              index,
                              e.target.value
                            )
                          }
                          placeholder="Enter your study task..."
                          className="w-full bg-[#1F2937] border border-gray-700 rounded-xl px-4 py-3 outline-none text-white placeholder:text-gray-400 focus:ring-2 focus:ring-white"
                        />

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>
       
                 {/* ============================
                RIGHT PANEL
          ============================ */}

          <div className="col-span-4 space-y-6">

            {/* Today's Tasks */}

            <div className="bg-white rounded-3xl shadow-sm p-6">

              <div className="flex justify-between items-center mb-5">

                <h2 className="text-2xl font-bold">
                   Today's Tasks
                </h2>

                <button
                  onClick={addTodo}
                  className="bg-black text-white px-4 py-2 rounded-xl"
                >
                  +
                </button>

              </div>

              <div className="space-y-4">

                {todos.map((todo, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >

                    <button
                      onClick={() =>
                        toggleTodo(index)
                      }
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition ${
                        todo.completed
                          ? "bg-green-500 border-green-500 text-white"
                          : "border-gray-400"
                      }`}
                    >
                      {todo.completed ? "✓" : ""}
                    </button>

                    <input
                      value={todo.text}
                      onChange={(e) =>
                        updateTodo(
                          index,
                          e.target.value
                        )
                      }
                      placeholder="Add Task..."
                      className={`flex-1 border rounded-xl px-4 py-3 outline-none ${
                        todo.completed
                          ? "line-through text-gray-400"
                          : ""
                      }`}
                    />

                    <button
                      onClick={() =>
                        deleteTodo(index)
                      }
                      className="text-red-500 hover:text-red-700 text-xl"
                    >
                      🗑
                    </button>

                  </div>

                ))}

              </div>

            </div>

            {/* AI Study Planner */}

            <div className="bg-white rounded-3xl shadow-sm p-6">

              <h2 className="text-2xl font-bold mb-4">
                 AI Study Planner
              </h2>

              <p className="text-gray-500 mb-4">
                Tell AI what you want to learn today.
              </p>

              <textarea
                rows={5}
                value={goal}
                onChange={(e) =>
                  setGoal(e.target.value)
                }
                placeholder="Example:

I want to learn React,Spring Boot"
                className="w-full border rounded-2xl p-4 resize-none outline-none"
              />

              <button
                onClick={generatePlan}
                disabled={loading}
                className="w-full mt-5 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
              >
                {loading
                  ? "Generating..."
                  : "Generate Study Plan"}
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}