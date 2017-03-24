const { bookshelf } = require('../db/bookshelf.js')


const Weapon = bookshelf.Model.extend({
  tableName: 'weapons',
  idAttribute: 'weapons_id',
  // battles: function() {
  //   return this.hasMany(Battle, 'monster_id')
  // }

});

module.exports = bookshelf.model('Weapon', Weapon)