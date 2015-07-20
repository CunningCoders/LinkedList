angular.module('app')

.controller('homepageController', ['$scope', 'jobs', '$rootScope', function($scope, jobs, $rootScope) {
  $scope.allProjects = jobs.data;
  $scope.currentProjects = $scope.allProjects.filter(function(job){
    return job.status==='confirmed';
  });
  $scope.pendingProjects = $scope.allProjects.filter(function(job){
    return job.status==='pending';
  });;

  $scope.setSelected = function(project) {
    $rootScope.selectedProject = project;
  }

}])