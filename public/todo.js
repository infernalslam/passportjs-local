angular.module('todoApp', [])
  .controller('TodoListController', function($scope, $http) {
    $scope.test = 'Login User'
    $scope.login = function (input){
      console.log(input.username, input.password)
    }
  })