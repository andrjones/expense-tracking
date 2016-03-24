var dbConfig = require('./knexfile');
var knex = require('knex')(dbConfig);
var bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

module.exports = bookshelf;

// uncomment to run migrations on startup rather than manually invoking from the cmd line
//knex.migrate.latest([dbConfig]);