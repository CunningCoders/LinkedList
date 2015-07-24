angular.module('app')

.controller('createJobController', ['$scope', '$http', function($scope, $http) {
	$scope.formData = {
    title: '',
    description: '',
    skills: [],
    status: 'pending',
    owner: 'Zach' //This should pull from credentials after signing in.
  };
	
	$scope.processForm = function(){
    $scope.formData.skills.push($scope.formData.skill1);
    $scope.formData.skills = JSON.stringify($scope.formData.skills);
		console.log('Sending:', $scope.formData);
    $http({method: 'POST', url: '/jobs/create', data: $scope.formData})
	}
}])
