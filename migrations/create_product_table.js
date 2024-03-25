/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//setup the schema for products table
exports.up = function (knex) {
  return knex.schema.createTable("product_details", (table) => {
    table.increments("id").primary();
    table.string("product_name").notNullable();
    table.string("category").notNullable();
    table.string("price").notNullable();
    table.string("description", 5000).notNullable();
    table.string("primary_image").notNullable();
    table.string("second_image").nullable;
    table.string("third_image").nullable;
    table.string("fourth_image").nullable;
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("product_details");
};
