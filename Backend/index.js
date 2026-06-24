import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import interviewRoutes from "./routes/interview.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  "/api/interview",
  interviewRoutes
);

app.listen(5000, () => {
  console.log(
    "Server Running On Port 5000"
  );
});