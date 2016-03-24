var bookshelf = require('../../db.js');
require('../category');

var Categories = bookshelf.Collection.extend({
    model: 'Category'
});

module.exports = bookshelf.collection('Categories', Categories);
