function MusicBoxController($scope, $element, $attrs, $route) {
    var ctrl = this;

    ctrl.list = [
        {kcode:'65', sym:'A', sound:'clap',      isPlaying:false},
        {kcode:'83', sym:'S', sound:'hihat',     isPlaying:false},
        {kcode:'68', sym:'D', sound:'kick',      isPlaying:false},
        {kcode:'70', sym:'F', sound:'openhat',   isPlaying:false},
        {kcode:'71', sym:'G', sound:'boom',      isPlaying:false},
        {kcode:'72', sym:'H', sound:'ride',      isPlaying:false},
        {kcode:'74', sym:'J', sound:'snare',     isPlaying:false},
        {kcode:'75', sym:'K', sound:'tom',       isPlaying:false},
        {kcode:'76', sym:'L', sound:'tink',      isPlaying:false}
        ];
        
    // ctrl.playSound = function(soundName) {
    //   console.log('the sound:', soundName);
    // }
    //other things
    $scope.testDirective = function() {
        console.log("YOUOUOUOOUOUOU");
    }

}

angular.module('myApp')
    .component('musicBox', {
        templateUrl: './musicBox.template.html',
        controller: MusicBoxController
    });