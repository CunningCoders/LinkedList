angular.module('app')

.controller('jobDetailsController', ['$scope', 'job', function($scope, job) {
	$scope.project = job;

}])
