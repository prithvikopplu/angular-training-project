angular
    .module('plunker')
    .factory('recipeFactory', RecipeFactory);

function RecipeFactory(){

    var recipeFactory = {};

    var recipes = [
        {
            name: 'chicken tikka masala',
            ingredients: ['chicken', 'masala', 'salt'],
            cookingTime: 45
        },
        {
            name: 'fish tikka masala',
            ingredients: ['fish', 'masala', 'salt'],
            cookingTime: 65
        },
        {
            name: 'mutton tikka masala',
            ingredients: ['mutton', 'masala', 'salt'],
            cookingTime: 85
        },
        {
            name: 'paneer tikka masala',
            ingredients: ['paneer', 'masala', 'salt'],
            cookingTime: 25
        },
        {
            name: 'bacon tikka masala',
            ingredients: ['bacon', 'masala', 'salt'],
            cookingTime: 35
        }
    ];

    recipeFactory.getRecipes = function(){
        return recipes;
    };

    recipeFactory.getRecipeName = function(){
        return "chicken pasta";
    };

    recipeFactory.getCookingTime = function(){
        return 45;
    };

    return recipeFactory;


}