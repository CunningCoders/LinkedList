angular.module('auth')

.factory('signInFactory', function($scope, $http){
	//auth.signin = function(username, password, callback) {
	  //user.signin(user.username, user.password)
      //.then()
	//}
	var checkSignin = function($q, $timeout, $http, $location, $rootScope) {
        var deferred = $q.defer();

        $http.get('/signin').success(function(user){
            if (user !== '0')
                deferred.resolve();

            else {
                $rootScope.message = 'Please sign in.';
                deferred.reject();
                $location.url('/signin')
            }
        })

        return deferred.promise;

	}
});


//get request - get all users - pass username
//for loop, see if present in response
//$http
//url directions - endpoints

	// $http.get('/signin').
	//   success(function(response){
	//   	$scope.
	//   }).
	//   error(function(response){

	//   });
