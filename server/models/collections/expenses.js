var bookshelf = require('../../db.js');
require('../expense');

var Expenses = bookshelf.Collection.extend({
    model: 'Expense'
});

module.exports = bookshelf.collection('Expenses', Expenses);
