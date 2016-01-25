angular.module("my-app", [])
.controller("HelloWorldController", ["$scope", function($scope) {
  $scope.message = "Hello World!";
}])
