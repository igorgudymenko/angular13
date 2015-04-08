'use strict';

angular.module('ajs13')
  .controller('MainCtrl', function ($scope) {

    $scope.cards = [
      {
        'id': 1,
        'name': 'Name 1',
        'phone': '+380930000000',
        'image': 'angular.png'
      },
      {
        'id': 2,
        'name': 'Name 2',
        'phone': '+380930000000',
        'image': 'browsersync.png'
      },
      {
        'id': 3,
        'name': 'Name 3',
        'phone': '+380930000000',
        'image': 'gulp.png'
      },
      {
        'id': 4,
        'name': 'Name 4',
        'phone': '+380930000000',
        'image': 'jasmine.png'
      },
      {
        'id': 5,
        'name': 'Name 5',
        'phone': '+380930000000',
        'image': 'jasmine.png'
      },
      {
        'id': 6,
        'name': 'Name 6',
        'phone': '+380930000000',
        'image': 'karma.png'
      },
      {
        'id': 7,
        'name': 'Name 7',
        'phone': '+380930000000',
        'image': 'protractor.png'
      }
    ];

    $scope.some = '';
    $scope.setVal = function() {
      console.log($scope.some);
      $scope.some = '(aa:99)';
    }
  });
