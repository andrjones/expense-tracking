var bookshelf = require('../db.js');
require('./expense');

var Category = bookshelf.Model.extend({
    tableName: 'categories',
    hasTimestamps: true,

    expenses: function() {
        return this.hasMany('Expense');
    }
});

module.exports = bookshelf.model('Category', Category);
