
exports.up = function(knex) {
  return knex.schema.createTable('sales', table => {
    table.increments();
    table.decimal('price').notNullable();
    table.text('soldTo').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sales');
};
