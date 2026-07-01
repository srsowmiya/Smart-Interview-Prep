import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../config/db.js"

const router = express.Router();

// SIGNUP
router.post("/", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const [rows] = await db.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        if (rows.length > 0) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user
        await db.query(
            "INSERT INTO users(name, email, password) VALUES (?, ?, ?)",
            [name, email, hashedPassword]
        );

        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

export default router;