import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Analayser from "./components/ResumAnalyser/Analayser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/resumeanalyzer"
        element={<Analayser />}
      />
    </Routes>
  );
}

export default App;