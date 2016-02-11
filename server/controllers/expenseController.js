var expenseController = function(expenseService) {

    return {
        getAllExpenses: getAllExpenses
    };

    function getAllExpenses(request, response) {
        response.send(expenseService.getAllExpenses());
        // todo: use this once the service returns a promise
        //expenseService.getAllExpenses().then(function(result) {
        //    response.send(result);
        //});
    }
};

module.exports = expenseController;