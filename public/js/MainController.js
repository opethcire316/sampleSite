var mainController = angular.module('myApp', []);

mainController.controller('mainCtrl', function ($scope) {
  $scope.phones = [
    {
      name: 'Blumpkin',
      description: 'A stubby nasty phone'
    },
    {
      name: 'Android',
      description: 'Beats an iphone'
    },
    {
      name: 'Iphone',
      description: 'Ok now but still overrated'
    }
  ]
})
