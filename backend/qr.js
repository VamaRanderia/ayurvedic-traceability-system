const QRCode = require("qrcode");

async function generateQR(batchId){
    const url= `http://localhost:3000/verify/${batchId}`;
    return await QRCode.toDataURL(url);
}

module.exports = generateQR;