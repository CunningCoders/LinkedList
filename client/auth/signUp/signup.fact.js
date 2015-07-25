angular.module('auth')

.factory('signUpFactory', function(){
  auth.signup = function() {	
    $http({
        method: 'POST',
        url: '/signup',
        data: "message=" + message,
        headers: {'Content-Type': 'application/json'}
    });
    .success(function(data) {
        console.log(data);

    if (!data.success) {
      // if not successful, bind errors to error variables
        $scope.errorName = data.errors.name;
        $scope.errorSuperhero = data.errors.superheroAlias;
        } else {
      // if successful, bind success message to message
        $scope.message = data.message;
    }
    
    });
  }
};

