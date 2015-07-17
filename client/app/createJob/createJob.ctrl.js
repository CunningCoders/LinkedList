angular.module('app')

.controller('createJobController', function($scope, creatJobFactory) {
	$scope.formData = {};
	$scope.uncheck = function (event) {
	    if ($scope.checked == event.target.value)
	        $scope.checked = false
	}
	$scope.processForm = function(){
		console.log(yay)
	}
})