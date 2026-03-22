require("dotenv").config();
const express = require("express");
const cors = require("cors");

const collectRoute = require("./routes/collect");
const traceRoute = require("./routes/trace");
const authRoute = require("./routes/auth");
const processRoute = require("./routes/process");
const productRoute = require("./routes/product");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/collect", collectRoute);
app.use("/trace", traceRoute);
app.use("/auth",authRoute);
app.use("/process", processRoute);
app.use("/product", productRoute);

app.listen(5000, () =>
console.log("Server running on port 5000"));