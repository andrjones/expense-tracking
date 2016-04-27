var express = require('express');

var expenseController = function(expenseService) {
    var expenseRouter = express.Router();

    expenseRouter
        .route('/')
        .get(function(request, response) {
            expenseService.getAllExpenses().then(function(expenses) {
                response.send(expenses);
            });
        })
        .post(function(request, response) {
            expenseService.addExpense(request.body).then(function(expense) {
                response.send(expense);
            });
        });

    expenseRouter
        .route('/:id')
        .get(function(request, response) {
            expenseService.getExpense(request.params.id).then(function(expense) {
                response.send(expense);
            });
        })
        .delete(function(request, response) {
            expenseService.deleteExpense(request.params.id).then(function() {
                response.sendStatus(200);
            })
        });
    return expenseRouter;
};

module.exports = expenseController;