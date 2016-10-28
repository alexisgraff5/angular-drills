angular.module('apiApp').controller('mainCtrl', function($scope, mainService) {

  mainService.getShipInfo().then(function(ships){
    $scope.ships = ships;
  });

});
