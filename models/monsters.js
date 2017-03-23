const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile');
const knex = require('knex')(config[env]);
const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry')

const Monster = bookshelf.Model.extend({
  tableName: 'monsters',
  idAttribute: 'monster_id',
  battles: function() {
    return this.hasMany(Battle, 'monster_id')
  }

});

module.exports = bookshelf.model('Monster', Monster)