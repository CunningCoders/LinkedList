//Auth module for instantiating the Auth UI Router. 
//Should successfully route users between signup and signin pages.
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

//This section creates an auth controller so that the appropriate links will show given a certain location.
//For example, users should only see the 'Don't have an account, signup' link when on the signin page.
.controller('authController', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope){
	$scope.currentPath = $location.path();
	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		  $scope.currentPath = $location.path();

		})
}]);

