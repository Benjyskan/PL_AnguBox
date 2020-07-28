//WORK IN PROGRESS
angular.module('myApp').directive("myAnim", ['$animate', function($animate) {
    return function(scope, element, attrs) {
        // watch the myAnim directive
        scope.$watch(attrs.myAnim, function(newVal) {
            if (newVal) {
                $animate.addClass(element, "myClass", function() {
                    // this its the call back, wrap it in $apply to update the angular models
                    scope.$apply(scope.testDirective());
                });
            } else {
                $animate.removeClass(element, "myClass");
            }
        });
    }
}]);

angular.module('myApp').animation(".myClass", function() {
    return {
        addClass: function(element, className, callback) {
            element.animate({ opacity: 0 }, callback);
        },
        removeClass: function(element, className, callback) {
            element.animate({ opacity: 1 }, callback);
        }
    }
});