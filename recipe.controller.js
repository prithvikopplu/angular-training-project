var app = angular
    .module('plunker');

app.controller('RecipeController', function(recipeService , recipeFactory) {
    // getting the module
    // $scope is the automated and synchronised bridge between Javascript and the DOM
    // $scope is how you will bind data from the controller to the view
    // you can bind any values to $scope that exists in the JS world


    // root scope = parent / father of all $scopes
    // ng-app creates the $rootScope
    // ng-controller, ng-repeat they create $scope


    // what is a controller ??
    // main purpose is to drive model view updates

    var vm= this;

    // ng-show shows an element if the boolean value attached to it is true
    // ng-hide hides an element if the boolean value attached to it is true

    vm.showRecipesFlag = false;
    vm.name = recipeService.getName();
    vm.age=23423423423423432423423424;
    vm.numberOfContinents = 6;
    vm.clickedRecipe = {};
    vm.recipeToBeAdded = {};
    //vm.recipeToBeAdded.name = recipeFactory.getRecipeName();
    //vm.recipeToBeAdded.cookingTime = recipeFactory.getCookingTime();


    vm.showRecipes = function(){
        vm.showRecipesFlag = true;
    };

    vm.hideRecipes = function() {
        vm.showRecipesFlag = false;
    };

    vm.recipes = recipeFactory.getRecipes();

    // view -> controller -> services/factories -> backend framework like node/java -> backend database like mysql and mongodb

    // recipes is an array of objects
    // each object is a recipe object

    /*
     * for(var i =0; i<recipes.length; i++)
     * {
     * console.log(recipes[i])
     * }
     * */

    vm.showClickedRecipe = function(i){
        vm.clickedRecipe.name = vm.recipes[i].name;
        vm.clickedRecipe.cookingTime = vm.recipes[i].cookingTime;
    };

    vm.deleteRecipe = function(i){
        vm.recipes.splice(i,1);
    };

    vm.addRecipe = function(){
        vm.showAddRecipeForm = true;
    };

    vm.submitAddRecipeForm = function(){
        vm.recipes.push(vm.recipeToBeAdded);
        vm.showAddRecipeForm = false;
        vm.recipeToBeAdded = {};
    }


    // ng-if
    // ng-click
    //ng-repeat
    //ng-controller
    //ng-app
    //ng-model
    // ng show
    // ng hide
    //  ng change

});