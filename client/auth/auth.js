var auth = angular.module('auth', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/signUp"); //Re-route unknown to signup page

  $stateProvider
    .state('signup', {
      url: '/signup',
      templateUrl: 'auth/signUp/signup.html',
      controller: 'signUpController',
    })
    .state('signin', {
      url: '/signin',
      templateUrl: 'auth/signIn/signin.html',
      controller: 'signInController',
    })
}])

.controller('authController', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope){
	$scope.currentPath = $location.path();
	$rootScope.$on('$stateChangeSuccess', 
		function(event, toState, toParams, fromState, fromParams){
		  $scope.currentPath = $location.path();

		})

    //$scope.changeState = function () {
    //$state.go('where.ever.you.want.to.go');
//};

}]);

