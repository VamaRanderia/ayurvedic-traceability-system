const express = require("express");
const router = express.Router();
const pool = require("../db");
const generateHash = require("../middleware/authMidddleware");

router.post("/", auth, async (req, res) => {
    const {
        herb_name,
        scientific_name,
        latitude,
        longitude,
        source_type,
    } = req.body;

    const batchData = {
        herb_name,
        scientific_name,
        latitude,
        longitude,
        source_type,
        collected_at: new Date(),
    };

    const hash = generateHash(batchData);

    const result = await pool.query(
        `INSERT INTO herb_batches
        (herb_name, scientific_name, latitude, longitude, source_type, hash)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING batch_id`,
        [
            herb_name,
            scientific_name,
            latitude,
            longitude,
            source_type,
            hash,
        ]
    );
    res.json({
        message: "Herb batch recorded",
       batch_id: result.rows[0].batch_id, 
    });
});

module.exports = router;
