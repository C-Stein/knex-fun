// The knex module is itself a function which takes a configuration 
// object for Knex, accepting a few parameters. The client parameter 
// is required and determines which client adapter will be used with 
// the library.
const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile');
const knex = require('knex')(config[env]);
const bookshelf = require('bookshelf')(knex);

const Battle = require('./models/battles')
const Monster = require('./models/monsters')

bookshelf.plugin('registry')




var monster = new Monster();  
monster.set('monster_name', 'Sully');  
//monster.set('variety', 'movie character');  

// monster.save().then(function(m) {  
//     console.log('Monster saved:', m.get('monster_name'));
// });

//bookshelf.model(name, [Model]) => Model

// const Meal = bookshelf.Model.extend({
//   tableName: 'meals',
//   sides: function() {
//     return this.belongsToMany('Side').through('SideSelection')
//   },
//   proteins: function() {
//     return this.belongsTo(Protein)
//   }
// })

// module.exports = bookshelf.model('Meal', Meal)




Battle.byLocation('Rhodes').then(function(u) {  
    console.log('Got battle:', u.get('monster_id'), u.get('hero_id'));
});


// Monster.forge({monster_name: 'Minotaur'}).fetch({withRelated: ['battles']})  
// .then(function(monster) {
//     console.log('Got monster:', monster.get('monster_name'), monster.get('monster_id'));//this works
//     console.log('Got battles:', monster.related('battles').toJSON());
//     //works better with .toJSON()!
// });

var Monsters = bookshelf.Collection.extend({  
    model: Monster
});

// Monsters.forge().fetch().then(function(monsters) {  
//     console.log('Got a bunch of monsters!');
//     monsters = monsters.toJSON()
//     console.log("My awessome json monsters", monsters)
// });

// Monsters.forge().fetch().then((monsters) => {
//   console.log("monsters", monsters.toJSON())
// })







