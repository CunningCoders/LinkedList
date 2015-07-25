angular.module('auth')

.factory('signInFactory', function(){
	$http({
        method: 'GET',
        url: '/signin',
        params: {}
    })
    .success(function(data, status, headers, config) {

    }).
    error(function(data, status, headers, config){

    })
    
});



