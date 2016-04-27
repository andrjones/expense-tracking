var expenses = require('../models/collections/expenses');
var Expense = require('../models/expense');
var guidService = require('./guidService');
var Q = require('q');

var expenseService = (function() {
    return {
        getAllExpenses: getAllExpenses,
        getExpense: getExpense,
        deleteExpense: deleteExpense,
        addExpense: addExpense
    };

    function getAllExpenses() {
        return expenses.fetch().then(function(dbExpenses) {
            return convertExpenses(dbExpenses);
        });
    }
    
    function getExpense(expenseId) {
        return Expense
            .where({id: expenseId})
            .fetch()
            .then(function(expense) {
                return convertExpense(expense);
            });
    }

    function deleteExpense(expenseId) {
        var deferred = Q.defer();
        Expense
            .forge({ id: expenseId })
            .destroy()
            .then(function() {
                deferred.resolve();
            })
            .catch(function(err) {
                deferred.reject(err);
            });
        return deferred.promise;
    }
    
    function addExpense(expense) {
        var deferred = Q.defer();
        Expense
            .forge({
                id: guidService.newGuid(),
                category_id: expense.category_id,
                date: expense.date,
                amount: expense.amount,
                place: expense.place,
                note: expense.note
            })
            .save(null, { method: 'insert' })
            .then(function(savedExpense) {
                deferred.resolve(convertExpense(savedExpense));
            })
            .catch(function(err) {
                deferred.reject(err);
            });
        return deferred.promise;
        
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
