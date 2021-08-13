multiTimerApp.component('timerModal', {
    templateUrl: '/includes/js/app/components/modal/modal.html',
    bindings: {
      modalData: '='
    },
    controller: function TimerModalController($scope, StorDataService) {
      this.modalData = StorDataService.getModalTimerData();
    }
  });