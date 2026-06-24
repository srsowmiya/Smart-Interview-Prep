import express from "express";
import cors from "cors";

import resumeRouter from "./routes/resume.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
  }));
app.use(express.json());

app.use("/api/resume", resumeRouter);

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});