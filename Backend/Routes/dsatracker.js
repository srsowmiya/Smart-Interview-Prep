import express from "express";
import db from "../config/dsa.js"

const router = express.Router();

/*
=========================================
GET ALL PROBLEMS
=========================================
*/

router.get("/problems", async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT
      p.id,
      p.title,
      p.topic,
      p.difficulty,
      p.platform,
      p.link,
      COALESCE(pr.completed, false) as completed

      FROM problems p

      LEFT JOIN progress pr
      ON p.id = pr.problem_id

      ORDER BY p.topic,p.id
    `);

    res.status(200).json(rows);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
});

/*
=========================================
TOGGLE PROBLEM
=========================================
*/

router.post("/toggle", async (req, res) => {
  try {
    const { problemId } = req.body;

    const [existing] = await db.query(
      `
      SELECT *
      FROM progress
      WHERE problem_id = ?
    `,
      [problemId]
    );

    if (existing.length === 0) {
      await db.query(
        `
        INSERT INTO progress
        (problem_id,completed)
        VALUES (?,true)
      `,
        [problemId]
      );
    } else {
      await db.query(
        `
        UPDATE progress
        SET completed = NOT completed
        WHERE problem_id = ?
      `,
        [problemId]
      );
    }

    res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
});

export default router;