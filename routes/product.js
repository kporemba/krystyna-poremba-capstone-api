const express = require("express");
const router = express.Router();

const productController = require("../controllers/product-controller");

//all products
router.route("/inventory").get(productController.getProducts);

//individual products
router.route("/inventory/:id").get(productController.getOneProduct);

module.exports = router;
