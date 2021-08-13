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