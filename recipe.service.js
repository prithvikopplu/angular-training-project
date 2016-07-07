angular
    .module('plunker')
    .service('recipeService', RecipeService)


function RecipeService(){

    // they talk to the the database
    // they also hold business logic
    // 2 ways of creating services - factory method and the service method
    // they return data to the controller , which would eventually / might get transferred to the view

    // internally it gets called with the new keyword
    // . service notation creates a singleton object

    // a singleton - instantiated one time only


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

    this.getRecipes = function(){
        return recipes;
    }

    this.getName = function (){
        return "hello world";
    }

}