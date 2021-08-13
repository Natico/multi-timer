// Define the `multiTimerApp` module
var multiTimerApp = angular.module('multiTimerApp', ['dateTime-filters']);


multiTimerApp.service('StorDataService', function ($http) {

    var timers = [];
    var modalTimerData = {}



    return {
        getTimers: getTimers,
        setTimers: setTimers,
        getModalTimerData : getModalTimerData,
        setModalTimerData : setModalTimerData
    };

    // .................

    function getModalTimerData() {
        return modalTimerData;
    }

    function setModalTimerData(timer) {
        modalTimerData = timer;
    }

    function getTimers() {
        return timers;
    }

    function setTimers(timer) {
        timers.push(timer);
    }
});

