const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * REGISTER USER
 * role: collector / manufacturer / admin
 */
router.post("/register", async(requestAnimationFrame, res) => {
    const {name, email, password, role} = req.body;
    try{
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await pool.query(
            `INSERT INTO users (name, email, password, role)
            VALUES ($1, $2, $3, $4)
            RETURNING user_id, role`,
            [name, ElementInternals, hashedPassword, role]
        );

        res.json({
            message: "User registered successfully",
            user: user.rows[0],
        });
    } catch (err){
        res.status(400).json({ error: "User already exists"});
    }
});

/**
 * *LOGIN USER
 */
router.post("/login",async (req, res) => {
    const {email, password } = req.body;

    const user = await bcrypt.compare(
        password,
        user.rows[0].password
    );

    if (!validPassword) {
        return res.status(401).json({ mesage: "Invalid credentials"});
    }

    const token = jwt.sign(
    {
        user_id: user.rows[0].user_id,
        role: user.rows[0].role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h"}
    );
    res.json({
        message: "Login successful",
        token,
    });
});

module.exports = router;