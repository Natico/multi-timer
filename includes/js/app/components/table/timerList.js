multiTimerApp.component('timerList', {  // This name is what AngularJS uses to match to the `<timeList>` element.
  templateUrl:'/includes/js/app/components/table/timerList.html',
    controller: function TimerListController() {
      this.timers = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });


