
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('weapons', function(table){
      table.increments('weapons_id').primary();
      table.string('weapons_name').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('weapons')
};
