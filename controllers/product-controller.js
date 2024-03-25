const knex = require("knex")(require("../knexfile"));

//get all products
const getProducts = async (req, res) => {
  try {
    const { sort_by, order_by } = req.query;
    const orderBy =
      order_by && order_by.toLowerCase() === "desc" ? "desc" : "asc";

    const data = sort_by
      ? await knex("product_details")
          .select(
            "id",
            "product_name",
            "category",
            "price",
            "description",
            "primary_image",
            "second_image",
            "third_image",
            "fourth_image"
          )
          .orderBy(sort_by, orderBy)
      : await knex("product_details").select(
          "id",
          "product_name",
          "category",
          "price",
          "description",
          "primary_image",
          "second_image",
          "third_image",
          "fourth_image"
        );
    res.set("Content-Type", "application/javascript");
    res.status(200).json(data);
  } catch (e) {
    res.status(400).send(`Error retrieving product details: ${e}`);
  }
};

//get one product
const getOneProduct = async (req, res) => {
  try {
    const productFound = await knex("product_details")
      .select(
        "id",
        "product_name",
        "category",
        "price",
        "description",
        "primary_image",
        "second_image",
        "third_image",
        "fourth_image"
      )
      .where({ id: req.params.id });

    if (productFound.length === 0) {
      return res.status(404).json({
        message: `Product with ID ${req.params.id} not found`,
      });
    }

    const productData = productFound[0];
    res.status(200).json(productData);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve product data for product with ID ${req.params.id}`,
    });
  }
};

module.exports = {
  getProducts,
  getOneProduct,
};
