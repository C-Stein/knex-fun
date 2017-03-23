const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile');
const knex = require('knex')(config[env]);
const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry')


let Battle = bookshelf.Model.extend({
  tableName: 'battles',
  monster: function() {
    return this.belongsTo('Monster', 'monster_id');
  },
  hero: function() {
    return this.belongsTo(hero, 'hero_id');
  }

},  {
    byLocation: function(location) {
    return this.forge().query({where:{ location: location }}).fetch();
  }
});


module.exports = bookshelf.model('Battle', Battle)