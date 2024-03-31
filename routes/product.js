const express = require("express");
const router = express.Router();

const productController = require("../controllers/product-controller");

router.route("/inventory").get(productController.getProducts);

router.route("/inventory/:id").get(productController.getOneProduct);

module.exports = router;
