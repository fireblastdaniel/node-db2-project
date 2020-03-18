exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl
      .string('vin', 17)
      .unique()
      .index()
      .notNullable();
    tbl.string('make').notNullable();
    tbl.string('model').notNullable();
    tbl.integer('milage').notNullable();

    tbl.string('transmission');
    tbl.string('title');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
