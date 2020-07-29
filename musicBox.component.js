'use strict';
function MusicBoxController($scope, $element, $attrs, $route) {
    var mainCtrl = this;

    mainCtrl.list = [
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

    mainCtrl.playElemSound = function (soundName) {
        console.log("playing: ", soundName);
        var audio = new Audio('sounds/' + soundName + '.wav');
        audio.currentTime = 0;
        audio.play();
        $scope.lastKeyPressed = soundName;
    }

    //mainCtrl.lastKeyPressed = 0;

    //Wrong placement
    angular.element(document).bind('keydown', function (e) {
        let i;
        //maybe i can 'get' by data-key instead of looping through
        for (i in mainCtrl.list) {
            if (mainCtrl.list[i].kcode == e.keyCode) {
                console.log("IT WORKED: " + e.keyCode)
                mainCtrl.playElemSound(mainCtrl.list[i].sound);
                mainCtrl.lastKeyPressed = '' + e.keyCode;
                $scope.lastKeyPressed = '' + e.keyCode;
            }
        }
    });
}

angular.module('myApp')
    .component('musicBox', {
        templateUrl: './musicBox.template.html',
        controller: MusicBoxController,
        controllerAs: 'mainctrl'
    });