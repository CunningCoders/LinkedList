//Signin factory for signin page.
angular.module('auth')

.factory('signInFactory', function(){
  auth.signin = function() { 
	$http({
        method: 'GET',
        url: '/signin',
        params: {}
    })
    .success(function(data, status) {

    }).
    error(function(data, status){

    })
  }
    
});



