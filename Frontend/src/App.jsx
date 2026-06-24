import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import MockInterview from "./components/MockInterview/MockInterviewPage";
import InterviewRoom from "./components/MockInterview/InterviewRoom";
import InterviewResult from "./components/MockInterview/InterviewResult"; 
import Analayser from "./components/ResumAnalyser/Analayser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/resumeanalyzer"
        element={<Analayser />}
      />

      <Route
  path="/mock-interview"
  element={<MockInterview />}
/>

<Route
  path="/interview-room"
  element={<InterviewRoom />}
/>

<Route
  path="/interview-result"
  element={<InterviewResult />}
/>
    </Routes>
  );
}

export default App;