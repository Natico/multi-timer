// Define the `multiTimerApp` module
var multiTimerApp = angular.module('multiTimerApp', []);

// Define the `TimerListController` controller on the `multiTimerApp` module
multiTimerApp.controller('TimerListController', function TimerListController($scope) {
  $scope.timers = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    },
  ];
});