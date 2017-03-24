
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('battle_weapons', function(table){
      table.increments('battle_weapons_id').primary();
      table.integer('weapon_id').notNullable();
      table.integer('battle_id').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('battle_weapons')
};
