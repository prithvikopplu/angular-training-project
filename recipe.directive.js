angular.module('plunker')
    .directive('recipeElement', recipeElement);


// recipeFlag ---> <recipe-flag></recipe-flag>


function recipeElement(){

    return {
        restrict: 'EA',
        // restrict property it tells angular with 1 letter or 2 letters as to how you will create your directive
        // E = element
        // A  = attribute
        // C = it will indicate that the directive would be found in css classes
        // M = will be similar to HTML comments
        /*
        *
        * <div recipe-directive></div>
        * */
        templateUrl: 'recipe.directive.html',
        // HTML code

        scope: {
            recipes: '=',
            showRecipesFlag: '=' // camel case works here
        }

        //isolate scope
        // you would use this isolate scope property in the directive template

    };

}