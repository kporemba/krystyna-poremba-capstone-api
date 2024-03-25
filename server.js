const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT ?? 8080;
const productRouter = require("./routes/product");

app.use(express.json());
app.use(cors());

app.use(express.static("public"));
app.use("/", productRouter);

app.use((req, res, next) => {
  console.log("middleware function run");
  next();
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
