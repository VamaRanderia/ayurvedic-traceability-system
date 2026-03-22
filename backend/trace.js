const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/:batch_id", async (req, res) => {
    const {batch_id} = req.params;

    const  data = await pool.query(
        `SELECT * FROM herb_batches WHERE batch_id=$1`, [batch_id]
    );

    if (data.rows.length === 0)
        return res.status(404).json({ message: "Not found"});
    res.json(data.rows[0]);
});

router.get("/all", async (req, res) => {
  const data = await pool.query("SELECT * FROM herb_batches");
  res.json(data.rows);
});


module.exports = router;