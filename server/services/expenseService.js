var expenses = require('../models/collections/expenses');

var expenseService = (function() {
    return {
        getAll: getAll
    };

    function getAll() {
        return expenses.fetch().then(function(dbExpenses) {
            return convertExpenses(dbExpenses);
        });
    }

    function convertExpenses(dbExpenses) {
        return dbExpenses.map(convertExpense);
    }

    function convertExpense(expense) {
        return {
            id: expense.id,
            category_id: expense.category_id,
            date: expense.date,
            amount: expense.amount,
            place: expense.place,
            note: expense.note,
            created_on: expense.created_on,
            updated_on: expense.updated_on
        };
    }
})();

module.exports = expenseService;
