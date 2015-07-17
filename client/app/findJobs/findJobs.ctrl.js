angular.module('app')

.controller('findJobsController', ['$scope','jobs', function($scope, jobs) {
  $scope.projects = jobs.data;
}])