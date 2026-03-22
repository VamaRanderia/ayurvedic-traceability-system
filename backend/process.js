const express = require("express");
const router = express.Router();
const pool = require("../db");
const generateHash = require("../utils/hash");
const auth = require("../middleware/authMiddleware");

/**
 * UPDATE PROCESSING STAGE
 * Only manufacturer /admin allowed
 */
router.post("/",auth, async(req, res)=> {
    const { batch_id, stage } = req.body;

    if (!["manufacturer", "admin"].includes(req.user.role)) {
        return res.status(403).json({ message: "Access denied"});
    }

    //Create log data
    const logData = {
        batch_data,
        stage,
        updated_by: req.user.user_id,
        timestamp: new Date(),
    };
    const hash = generateHash(logData);

    //insert into processing logs
    await pool.query(
    `INSERT INTO processing_logs (batch_id, stage, updated_by, hash)
    VALUES ($!, $2, $3, $4)`,
    [batch_id, stage, req.user.user_id, hash]
);

//update current stage in herb_batches
await pool.query(
    `UPDATE herb_batches
    SET current_stages= $1
    WHERE batch_id=$2`,
    [stage, batch_id]
);
res.json({
    message: "Processing stage updated successfully",
});
});

module.exports = router;