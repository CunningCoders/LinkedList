angular.module('app', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/homepage"); //Re-route unknown to homepage

  $stateProvider
    .state('createJob', {
      url: '/createJob',
      templateUrl: 'app/createJob/createJob.html',
      controller: 'createJobController'
    })
    .state('findJobs', {
      url: '/findJobs',
      templateUrl: 'app/findJobs/findJobs.html',
      controller: 'findJobsController',
      resolve: {
        jobs: ['$http', function($http){
          console.log('Trying to GET, findJobs')
          return $http({method: 'GET', url: '/jobs'});
        }]
      }
    })
    .state('jobDetails', {
      url: '/jobDetails',
      templateUrl: 'app/jobDetails/jobDetails.html',
      controller: 'jobDetailsController',
      resolve: {
        job: ['$rootScope',function ($rootScope){
          return $rootScope.selectedProject;
        }]
      } 
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'app/profile/profile.html',
      controller: 'profileController'
    })
    .state('homepage', {
      url: '/homepage',
      templateUrl: 'app/homepage/homepage.html',
      controller: 'homepageController',
      resolve: {
        jobs: ['$http', function($http){
          console.log('Trying to GET, homepage')
          return $http({method: 'GET', url: '/jobs'});
        }]
      }
    })
}])
//authentication checking here? Like in shortly-angular.
