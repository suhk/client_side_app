var angular = require('angular');

const clockApp = angular.module('clockApp', []);
clockApp.controller('clockController', ['$scope', '$interval', ($scope, $interval) => {
  $interval(function() {
    var date = new Date();
    date.setUTCHours(date.getUTCHours() + $scope.timeZone);
    $scope.time = date.toUTCString();
  }, 1000);

}]);
