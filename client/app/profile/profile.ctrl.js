angular.module('app') 

.controller('profileController', function($scope, profileFactory) {
	//if logged in, be allowed to edit
	$scope.editIndex = -1
	$scope.editObject = {
		firstName: "",
		lastName: "",
		imgSrc: "",
		from: {city: "", state: ""},
		phone: "",
		email: "",
		jobTitle: "",
		company: "",
		description: "",
		skills: ""
	}
	$scope.editingPerson = function(personIndex){
		//seperate edits from original array, in case of cancel
	    $scope.editObject = angular.copy($scope.employeeArray[personIndex]); 
	    $scope.editIndex = personIndex;
     };

    $scope.cancelEdit = function(){
        $scope.editIndex = -1;
    }; 
    //saveEdit
    $scope.saveEdit = function(personIndex){
        profileFactory.updateInfo(personIndex, $scope.editObject);
        $scope.editIndex = -1;
    }

	//a button that can connect to linkedin

	//list of jobs that profileperson is currently working on (including his own)
})