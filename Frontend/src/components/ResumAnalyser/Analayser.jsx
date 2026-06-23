import { useState } from "react";
import { Upload, FileText } from "lucide-react";

const Analayser = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setResult(null);
      setError("");
    }
  };

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please upload a resume first");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const formData = new FormData();
      formData.append("resume", file);

      const response = await fetch(
        "http://localhost:5000/api/resume/analyze",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to analyze resume");
      }

      const data = await response.json();

      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Failed to analyze resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Resume Analyzer
          </h1>

          <p className="text-gray-500 mt-2">
            Upload your resume and get AI-powered feedback.
          </p>
        </div>

        {/* Upload Card */}
        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
              <FileText className="w-6 h-6 text-black" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Upload Resume
              </h2>

              <p className="text-sm text-gray-500">
                PDF format only
              </p>
            </div>
          </div>

          {/* Upload Area */}
          <label
            htmlFor="resume"
            className="border-2 border-dashed border-gray-300 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-black hover:bg-gray-50 transition"
          >
            <Upload className="w-10 h-10 text-gray-400 mb-4" />

            <p className="text-gray-900 font-medium">
              Click to upload your resume
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Supports PDF files
            </p>

            <input
              id="resume"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {/* Selected File */}
          {fileName && (
            <div className="mt-6 p-4 bg-gray-100 rounded-xl">
              <p className="text-sm font-medium text-gray-800">
                Selected File
              </p>

              <p className="text-sm text-gray-600 mt-1">
                {fileName}
              </p>
            </div>
          )}

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="w-full mt-6 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition disabled:opacity-50"
          >
            {loading ? "Analyzing Resume..." : "Analyze Resume"}
          </button>

          {/* Error */}
          {error && (
            <div className="mt-6 p-4 rounded-xl bg-red-100 border border-red-200 text-red-600">
              {error}
            </div>
          )}
        </div>

        {/* Results */}
        {result && (
          <div className="mt-8 space-y-6">
            {/* ATS Score */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                ATS Score
              </h2>

              <p className="text-5xl font-bold text-black">
                {result.atsScore}/100
              </p>
            </div>

            {/* Summary */}
            {result.summary && (
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Summary
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  {result.summary}
                </p>
              </div>
            )}

            {/* Strengths */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-green-600 mb-4">
                Strengths
              </h2>

              <ul className="space-y-3">
                {result.strengths?.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-700 flex items-start gap-2"
                  >
                    <span className="text-green-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Weaknesses */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-red-600 mb-4">
                Weaknesses
              </h2>

              <ul className="space-y-3">
                {result.weaknesses?.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-700 flex items-start gap-2"
                  >
                    <span className="text-red-600">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Suggestions */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-blue-600 mb-4">
                Suggestions
              </h2>

              <ul className="space-y-3">
                {result.suggestions?.map((item, index) => (
                  <li
                    key={index}
                    className="text-gray-700 flex items-start gap-2"
                  >
                    <span className="text-blue-600">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Analayser;