//var myApp = angular.module('myApp', ['ngAnimate', 'ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('', {releadOnSearch: false});
}]);