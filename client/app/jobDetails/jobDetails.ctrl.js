angular.module('app')

.controller('jobDetailsController', ['$scope', 'job', function($scope, job) {
	$scope.project = job;
  $scope.skills = JSON.parse(job.skills);
  $scope.coworkers = job.coworkers;

}])