
(function (angular) {
  'use strict';

  angular.module('dateTime-filters', [])

    .filter('moment', function () {
      return function (value, command, params) {
        let resault;
        let m = moment(value);
        switch (command) {
          case "format":
            resault = m.format(params)
            break;

          default:
            break;
        }
        return resault
      };
    })

    .filter('msToTime', function () {
      return function (value, command, params) {
        return msToTime(value);
      };
    });
})(angular);