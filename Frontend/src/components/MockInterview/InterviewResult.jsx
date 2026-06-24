import { useLocation, useNavigate } from "react-router-dom";

export default function InterviewResult() {
  const navigate = useNavigate();
  const location = useLocation();

  const result = location.state;

  if (!result) {
    return (
      <div className="p-10">
        No Result Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] p-10">
      <div className="bg-white rounded-3xl p-10 max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          Interview Analysis
        </h1>

        <div className="grid md:grid-cols-3 gap-5">

          <div className="bg-gray-100 rounded-2xl p-6">
            <h3>Technical Depth</h3>
            <p className="text-5xl font-bold">
              {result.technicalScore}
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6">
            <h3>Communication</h3>
            <p className="text-5xl font-bold">
              {result.communicationScore}
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6">
            <h3>Confidence</h3>
            <p className="text-5xl font-bold">
              {result.confidenceScore}
            </p>
          </div>

        </div>

        <div className="mt-10">
          <h2 className="font-bold mb-4">
            Suggestions
          </h2>

          <ul className="space-y-3">
            {result.suggestions?.map(
              (item, index) => (
                <li key={index}>
                  • {item}
                </li>
              )
            )}
          </ul>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-10 bg-black text-white px-8 py-3 rounded-xl"
        >
          Back To Dashboard
        </button>
      </div>
    </div>
  );
}