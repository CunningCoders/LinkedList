angular.module('app', [
  'app.createJob',
  'app.findJobs',
  'app.jobDetails',
  'app.profile',
  'app.homepage',
  'ui.router'
])//Each view's module needs to be pulled in here, along with other dependencies

.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/"); //Re-route unknown to homepage

  $stateProvider
    .state('createJob', {
      url: '/createJob',
      templateUrl: 'createJob/createJob.html',
      controller: 'createJob/createJob.ctrl.js'
    })
    .state('findJobs', {
      url: '/findJobs',
      templateUrl: 'findJobs/findJobs.html',
      controller: 'findJobs/findJobs.ctrl.js'
    })
    .state('jobDetails', {
      url: '/jobDetails',
      templateUrl: 'jobDetails/jobDetails.html',
      controller: 'jobDetails/jobDetails.ctrl.js' 
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'profile/profile.html',
      controller: 'profile/profile.ctrl.js'
    })
    .state('homepage', {
      url: '/', 
      templateUrl: 'homepage/homepage.html',
      controller: 'homepage/homepage.ctrl.js'
    })
})
//authentication checking here? Like in shortly-angular.