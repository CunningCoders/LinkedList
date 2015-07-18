angular.module('app')

.controller('createJobController', ['$scope', function($scope) {
	$scope.formData = {};
	$scope.uncheck = function (event) {
	    if ($scope.checked == event.target.value)
	        $scope.checked = false
	}
	$scope.processForm = function(){
		console.log(yay)
	}
}])
