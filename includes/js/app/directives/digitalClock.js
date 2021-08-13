
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