angular.module('app')

.controller('homepageController', ['$scope', 'jobs', function($scope, jobs) {
  $scope.currentProjects = jobs.data;
  $scope.pendingProjects = [
    { id: 3,
    title: 'Awesome JS',
    ownerid: 2,
    description: 'Make it awsome.',
    skills: 'Angular, UI-Router, Backbone',
    coworkers: 'Colin, Brittney, John, Zach' }
  ];

}])