
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.increments();
    table.text('VIN').notNullable();
    table.text('make').notNullable();
    table.text('model').notNullable();
    table.text('mileage').notNullable();
    table.text('transmissionType');
    table.text('statusOfTitle');
    table.integer('saleInfo');
    table.foreign('saleInfo').references('id').inTable('sales');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
