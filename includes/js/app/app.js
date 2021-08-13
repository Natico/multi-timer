// Define the `multiTimerApp` module
var multiTimerApp = angular.module('multiTimerApp', []);

// Define the `TimerListController` controller on the `multiTimerApp` module
multiTimerApp.controller('TimerListController', ['$scope', '$q', function ($scope, $q) {
    
    $scope.timers = [];
    $scope.modalData = {}

    $scope.addTimer = function () {
        let i = 0;
        let timer = {
            startEvent: new Date().getTime(),
            endEvent: null,
            lastPlayEvent: new Date().getTime(),
            title: null,
            famsStoryNumber: null,
            famsTaskNumber: null,
            uniqueId: getUniqueId("time-"),
            status: null,
            lastPauseTime: null,
            lastPLayTime: null,
            pausedList: [],
            duretion: 0
        }
        console.log(timer);
        $scope.timers.push(timer);
    };

    $scope.pauseTimer = function (timer) {
        timer.status = "PAUSED";
        timer.lastPauseTime = new Date().getTime();
        timer.pausedList.push({
            playTime: timer.lastPlayEvent,
            puseTime: timer.lastPauseTime
        })
    }

    $scope.playTimer = function (timer) {
        timer.status = "PLAYED";
        timer.lastPlayEvent = new Date().getTime();
    }

    $scope.stopTimer = function (timer) {
        timer.lastPauseTime = new Date().getTime();
        timer.endEvent = new Date().getTime();
        if (timer.status == "PLAYED") {
            timer.pausedList.push({
                playTime: timer.lastPlayEvent,
                puseTime: timer.lastPauseTime
            })
        }
        timer.status = "STOPED";
    }

    $scope.showModal = function(timer){
        $scope.modalData = timer;
        $('.ui.modal').modal('show')
    }

}]);


multiTimerApp.directive("digitalClock", function ($timeout, dateFilter) {
    return function (scope, element, attrs) {

        scope.calculate = function (s) {
            let duretionTotal = 0
            for (let i = 0; i < scope.timer.pausedList.length; i++) {
                let item = scope.timer.pausedList[i];
                let itemDuration = parseInt((item.puseTime - item.playTime));
                duretionTotal = duretionTotal + itemDuration;
            }
            scope.timer.duretion = msToTime(duretionTotal);
        }

        scope.updateClock = function () {
            $timeout(function () {
                if (scope.timer.status == "PLAYED") {
                    let duretionTime = parseInt((new Date().getTime() - scope.timer.lastPlayEvent));
                    element.text(msToTime(duretionTime));
                    scope.updateClock();
                } else {
                    element.text("00:00:00");
                }

            }, 1000);
        };

        var watchForChange = function () {
            return scope.timer.status;
        }

        scope.$watch(watchForChange, function (newValue, oldValue, scope) {
            if (scope.timer.status == "PLAYED") {
                scope.updateClock();
            } else if (scope.timer.status == "PAUSED" || scope.timer.status == "STOPED") {
                scope.calculate();
            }
        }, true);

        scope.timer.status = "PLAYED";
    };
});

multiTimerApp.filter('myFormat', function() {
    return function(x) {
        debugger;
      var i, c, txt = "";
      for (i = 0; i < x.length; i++) {
        c = x[i];
        if (i % 2 == 0) {
          c = c.toUpperCase();
        }
        txt += c;
      }
      return txt;
    };
  });
