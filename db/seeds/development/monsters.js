
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('monsters').del()
    .then(function () {
      // Inserts seed entries
      return knex('monsters').insert([
        {monster_name: 'Elmo'},
        {monster_name: 'Taka'},
        {monster_name: 'Minotaur'}
      ]);
    });
};
