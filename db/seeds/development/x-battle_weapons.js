//this file has an "x" prepended to the name so that it will run after the
//other files
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('battle_weapons').del()
    .then(function () {
      // Inserts seed entries
      return knex('battle_weapons').insert([
        {battle_weapons_id: 1, weapon_id: 1, battle_id: 2},
        {battle_weapons_id: 2, weapon_id: 2, battle_id: 2},
        {battle_weapons_id: 3, weapon_id: 3, battle_id: 2}
      ]);
    });
};
