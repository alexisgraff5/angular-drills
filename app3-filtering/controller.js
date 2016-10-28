angular.module('app3').controller('mainCtrl', function($scope, mainService) {

  $scope.employees = mainService.getEmployees();

});
