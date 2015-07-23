angular.module('auth')

.factory('signUpFactory', function(){
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
};

//POST to create new user

  // $http.post('/signup', {msg:'You have successfully signed up.'}).
  // success(function(data, status, headers, config) {
  //   // this callback will be called asynchronously
  //   // when the response is available
  // }).
  // error(function(data, status, headers, config) {
  //   // called asynchronously if an error occurs
  //   // or server returns response with an error status.
  // })