
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('heros').del()
    .then(function () {
      // Inserts seed entries
      return knex('heros').insert([
        {hero_id: 1, hero_name: 'Moana'},
        {hero_id: 2, hero_name: 'Odysseus'},
        {hero_id: 3, hero_name: 'Spiderman'}
      ]);
    });
};
