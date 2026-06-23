import { useState } from "react";
import { Upload, FileText } from "lucide-react";

const Analayser = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
    }
    
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] p-8">
      <div className="max-w-3xl mx-auto">
        
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
                Selected File:
              </p>

              <p className="text-sm text-gray-600 mt-1">
                {fileName}
              </p>
            </div>
          )}

          {/* Analyze Button */}
          <button
            className="w-full mt-6 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
          >
            Analyze Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analayser;