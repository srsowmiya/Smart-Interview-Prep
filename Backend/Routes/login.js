import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../config/db.js"

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const [rows] = await db.query(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );

        // User not found
        if (rows.length === 0) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const user = rows[0];

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Generate JWT
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "1d"
            }
        );

        // Send response
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: "Internal Server Error"
        });
    }
});

export default router;