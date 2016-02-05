var expenseService = {};

// todo (asj): should return promise, also, convert to es6
expenseService.getAllExpenses = function() {
    return [
        {
            id: 123,
            cat: 'Auto',
            subcat: 'Gas',
            value: 40.50,
            note: ''
        },
        {
            id: 345,
            cat: 'Food',
            subcat: 'Groceries',
            value: 56.77,
            note: ''
        }
    ];
};

module.exports = expenseService;