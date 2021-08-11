// Define the `multiTimerApp` module
var multiTimerApp = angular.module('multiTimerApp', []);

// Define the `TimerListController` controller on the `multiTimerApp` module
// multiTimerApp.controller('TimerListController', function TimerListController($scope) {
//   $scope.timers = [
//     {
//       name: 'Nexus S',
//       snippet: 'Fast just got faster with Nexus S.'
//     }, {
//       name: 'Motorola XOOM™ with Wi-Fi',
//       snippet: 'The Next, Next Generation tablet.'
//     },
//   ];
// });

// angular.module('multiTimerApp').component('timeList', {  // This name is what AngularJS uses to match to the `<timeList>` element.
//     template:
//         '<ul>' +
//           '<li ng-repeat="time in $ctrl.timers">' +
//             '<span>{{time.name}}</span>' +
//             '<p>{{time.snippet}}</p>' +
//           '</li>' +
//         '</ul>',
//     controller: function TimerListController() {
//       this.timers = [
//         {
//           name: 'Nexus S',
//           snippet: 'Fast just got faster with Nexus S.'
//         }, {
//           name: 'Motorola XOOM™ with Wi-Fi',
//           snippet: 'The Next, Next Generation tablet.'
//         }, {
//           name: 'MOTOROLA XOOM™',
//           snippet: 'The Next, Next Generation tablet.'
//         }
//       ];
//     }
//   });