angular.module('app')

.controller('profileController', ['$scope' ,function($scope) {
  //if logged in, be allowed to edit
  $scope.editObject = {
      name: "Zack Lee",
      imgSrc: "http://1funny.com/wp-content/uploads/2010/09/surfing-grandma.jpg",
      location: "Houston, Texas",
      phone: "7132021535",
      jobTitle: "CEO of SquakerMare",
      description: "just a grandma and her surfboard lookin for some developers",
      skills: "Angular, Postgres, Node"
    }
    //a button that can connect to linkedin

  //list of jobs that profileperson is currently working on (including his own)
}])

.directive("clickToEdit", function() {
  var editorTemplate = '' +
    '<span class="click-to-edit">' +
    '<span ng-hide="view.editorEnabled">' +
    '<button ng-click="enableEditor()">Edit</button>' +
    '</span>' +
    '<div ng-show="view.editorEnabled">' +
    '<input type="text" ng-model="view.editableValue">' +
    '<button href="#" ng-click="save()">Save</button>' +
    ' or ' +
    '<button ng-click="disableEditor()">cancel</button>' +
    '</div>' +
    '</span>'
  return {
    restrict: "A",
    replace: true,
    template: editorTemplate,
    scope: {
      value: "=clickToEdit",
    },
    link: function(scope, element, attrs) {
      scope.view = {
        editableValue: scope.value,
        editorEnabled: false
      };
      scope.enableEditor = function() {
        scope.view.editorEnabled = true;
        scope.view.editableValue = scope.value;
        setTimeout(function() {
          element.find('input')[0].focus();
          //element.find('input').focus().select(); // w/ jQuery
        });
      };

      scope.disableEditor = function() {
        scope.view.editorEnabled = false;
      };

      scope.save = function() {
        scope.value = scope.view.editableValue;
        scope.disableEditor();
      };
    }
  };
});
