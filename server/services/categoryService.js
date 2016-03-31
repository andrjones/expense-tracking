var categories = require('../models/collections/categories');
var Category = require('../models/category');
var guidService = require('./guidService');
var Q = require('q');

var categoryService = (function() {
    return {
        getAllActiveCategories: getAllActiveCategories,
        getCategory: getCategory,
        addCategory: addCategory,
        archiveCategory: archiveCategory
    };
    
    function getAllActiveCategories() {
        return categories
            .where('active', true)
            .fetch()
            .then(function(dbCategories) {
                return convertCollection(dbCategories);
            });
    }

    function getCategory(categoryId) {
        return Category
            .where({id: categoryId})
            .fetch()
            .then(function(category) {
                return convertCategory(category);
            });
    }
    
    function addCategory(category) {
        var deferred = Q.defer();
        Category
            .forge({
                id: guidService.newGuid(),
                category: category.category,
                subcat: category.subcat
            })
            .save(null, { method: 'insert' })
            .then(function(savedCategory) {
                deferred.resolve(convertCategory(savedCategory));
            })
            .catch(function(err) {
                deferred.reject(err);
            });
        return deferred.promise;
    }
    
    function archiveCategory(categoryId) {
        var deferred = Q.defer();
        Category
            .forge({ id: categoryId })
            .save({ active: false }, { method: 'update', require: true })
            .then(function(updatedModel) {
                deferred.resolve(convertCategory(updatedModel));
            })
            .catch(function(err) {
                deferred.reject(err);
            });
        return deferred.promise;
    }

    function convertCollection(dbCategories) {
        return dbCategories.map(convertCategory);
    }

    function convertCategory(category) {
        return {
            id: category.id,
            category: category.category,
            subcat: category.subcat
        };
    }
    
})();

module.exports = categoryService;
