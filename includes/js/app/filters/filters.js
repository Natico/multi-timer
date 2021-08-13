/*
multiTimerApp.filter('moment', function() {
    return function(value, command, parametrs) {
        debugger;

     
      return txt;
    };
  });
*/
(function (angular) {
  'use strict';

  angular.module('moment-filter', [])

    .filter('moment', function () {
      return function (value, command, params) {
        let resault;
        let m = moment(value);


        switch (command) {
          case "format":
            m.format()
            break;

          default:
            break;
        }


        return resault
      };
    })



  angular.module('moment-filter', [])

    .filter('msToTime', function () {
      return function (value, command, params) {



        return msToTime(value);
      };
    });
})(angular);