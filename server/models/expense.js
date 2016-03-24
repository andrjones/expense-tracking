var bookshelf = require('../db.js');
require('./category');

var Expense = bookshelf.Model.extend({
    tableName: 'expenses',
    hasTimestamps: true,

    category: function() {
        return this.belongsTo('Category');
    }
});

module.exports = bookshelf.model('Expense', Expense);
