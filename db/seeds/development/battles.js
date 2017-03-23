
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('battles').del()
    .then(function () {
      // Inserts seed entries
      return knex('battles').insert([
        {location: 'Rhodes', monster_id: 13, hero_id: 1},
        {location: 'Sesame Street', monster_id: 13, hero_id: 1},
        {location: 'Winterfell', monster_id: 1, hero_id: 1}
      ]);
    });
};
