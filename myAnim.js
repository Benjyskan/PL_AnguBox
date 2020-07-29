'use strict';
//useless
angular.module('myApp').directive('myKeyHandler', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.myKeyHandler);
                })
            event.preventDefault();
            }
        })
    }
})