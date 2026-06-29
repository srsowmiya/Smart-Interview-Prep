import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import interviewRoutes from "./routes/interview.js";
import dsaTrackerRoutes from "./routes/dsatracker.js";
import aptitudeRoutes from './routes/aptitude.js'
import resumeRoutes from "./routes/resume.js";
import studyPlannerRoutes from "./routes/studyPlanner.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/interview",
  interviewRoutes
);



app.use(
  "/api/dsa",
  dsaTrackerRoutes
);

app.use(
  "/api/aptitude",
  aptitudeRoutes
);

app.use(
  "/api/resume",
  resumeRoutes
);

app.use(
  "/api/studyplanner",
  studyPlannerRoutes
);

app.listen(5000, () => {
  console.log(
    "Server Running On Port 5000"
  );
});