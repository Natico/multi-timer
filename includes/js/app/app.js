// Define the `multiTimerApp` module
var multiTimerApp = angular.module('multiTimerApp', []);

// Define the `TimerListController` controller on the `multiTimerApp` module
multiTimerApp.controller('TimerListController', ['$scope', '$q', function ($scope, $q) {
    $scope.timers = [];


    $scope.addTimer = function () {
        let i = 0;
        let timer = {
            startEvent: new Date().getTime(),
            endEvent: null,
            title: null,
            famsStoryId: null,
            famsTaskId: null,
            id: getUniqueId("time-"),
            status: null,
            lastPauseTime : null,
            duretion: 0
        }
        console.log(timer);
        $scope.timers.push(timer);
    };

    $scope.pauseTimer = function (timer){
        timer.status = "PAUSED";
        timer.lastPauseTime = new Date().getTime();
    }

    $scope.playTimer = function (timer){
        timer.status = "PLAYED";
        // timer.lastPauseTime = new Date().getTime();
    }

    $scope.stopTimer = function (){
        timer.status = "STOPED"
    }
}]);

multiTimerApp.directive("digitalClock", function ($timeout, dateFilter) {
    return function (scope, element, attrs) {

        scope.updateClock = function () {
            $timeout(function () {
                if(scope.timer.status != "PAUSED"){
                    let lastTime = scope.timer.lastPauseTime ? scope.timer.lastPauseTime : scope.timer.startEvent;
                    let duretionTime = parseInt((new Date().getTime() - lastTime) / 1000) ;
                    if(scope.timer.lastPauseTime){
                        duretionTime = scope.timer.duretion ? duretionTime + scope.timer.duretion : duretionTime;
                        scope.timer.lastPauseTime = null;
                    }
                    
                    element.text(duretionTime);
                    scope.timer.duretion = duretionTime;
                    scope.updateClock();
                }
                
            }, 1000);
        };

        scope.updateClock();

    };
});

// multiTimerApp.directive('myCustomer', ['$interval', 'dateFilter', function ($interval, dateFilter) {

//     function link(scope, element, attrs) {
//         debugger;
//         showTime(element[0])
//         // var format,
//         //     timeoutId;

//         // function updateTime() {
//         //     element.text(dateFilter(new Date(), format));
//         // }

//         // scope.$watch(attrs.myCurrentTime, function (value) {
//         //     format = value;
//         //     updateTime();
//         // });

//         // element.on('$destroy', function () {
//         //     $interval.cancel(timeoutId);
//         // });

//         // // start the UI update process; save the timeoutId for canceling
//         // timeoutId = $interval(function () {
//         //     updateTime(); // update DOM
//         // }, 1000);
//     }

//     return {
//         link: link
//     };
// }]);