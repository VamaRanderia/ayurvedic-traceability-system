const express = require("express");
const router = express.Router();
const pool = requuire("../db");
const generateQR = require("../utils/qr");
const auth = require("../middleware/authMiddleware");

router.post("/create", auth, async(req ,res) => {
    const {product_name, batch_id} = req.body;

    const qrCode = await generateQR(batch_id);
    const result = await pool.query(
        `INSERT INTO productsn (product_name, batch_ids, qr_code_url)
        VALUES ($1, ARRAY[$2], $3)
        RETURNING product_id`,
        [product_name, batch_id, qrCode]
    );

    res.join({
        message: "Product created with QR",
        product_id: result.rows[0].product_id,
        qrCode,
    });
});

module.exports = router;
