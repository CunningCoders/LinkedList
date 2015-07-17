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
      controller: 'findJobsController'
    })
    .state('jobDetails', {
      url: '/jobDetails',
      templateUrl: 'app/jobDetails/jobDetails.html',
      controller: 'jobDetailsController' 
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'app/profile/profile.html',
      controller: 'profileController'
    })
    .state('homepage', {
      url: '/homepage', 
      templateUrl: 'app/homepage/homepage.html',
      controller: 'homepageController'
    })
}])
//authentication checking here? Like in shortly-angular.