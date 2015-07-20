angular.module('app')

.controller('findJobsController', ['$scope','jobs', '$rootScope', function($scope, jobs, $rootScope) {
  $scope.projects = jobs.data;

  $scope.setSelected = function(project) {
    $rootScope.selectedProject = project;
  }
}])