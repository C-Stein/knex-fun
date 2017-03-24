
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('weapons').del()
    .then(function () {
      // Inserts seed entries
      return knex('weapons').insert([
        {weapons_id: 1, weapons_name: 'spoon'},
        {weapons_id: 2, weapons_name: 'sword'},
        {weapons_id: 3, weapons_name: 'battle axe'}
      ]);
    });
};
