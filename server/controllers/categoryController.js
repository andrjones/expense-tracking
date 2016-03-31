var express = require('express');

var categoryController = function(categoryService) {
    var categoryRouter = express.Router();

    categoryRouter
        .route('/')
        .get(function(request, response) {
            categoryService.getAllActiveCategories().then(function(categories) {
                response.send(categories);
            });
        })
        .post(function(request, response) {
            categoryService.addCategory(request.body).then(function(category) {
                response.send(category);
            })
        });

    categoryRouter
        .route('/:id')
        .get(function(request, response) {
            categoryService.getCategory(request.params.id).then(function(category) {
                response.send(category);
            })
        })
        .delete(function(request, response) {
            categoryService.archiveCategory(request.params.id).then(function() {
                response.status(200);
            })
        });

    return categoryRouter;
};

module.exports = categoryController;
