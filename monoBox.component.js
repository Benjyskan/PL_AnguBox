'use strict';
function MonoBoxController($scope, $element) {
    //var monoCtrl = this;

}

angular.module('myApp').component('monoBox', {
    templateUrl: 'monoBox.template.html',
    controller: MonoBoxController,
    controllerAs: 'monoctrl',
    bindings: {
        whichkey: '<'
    }
});