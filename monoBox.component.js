function MonoBoxController() {
    var ctrl = this;

    ctrl.monoPlaySound = function() {
        console.log('playing: ', ctrl.test.sound);
        var audio = new Audio('sounds/' + ctrl.test.sound + '.wav');
        audio.currentTime = 0;
        audio.play();
        ctrl.test.isPlaying = true;
        
    }
}

angular.module('myApp').component('monoBox', {
    templateUrl: 'monoBox.template.html',
    controller: MonoBoxController,
    bindings: {
        test: '<'
    }
});