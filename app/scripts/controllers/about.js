'use strict';

/**
 * @ngdoc function
 * @name heyIamHereApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the heyIamHereApp
 */
angular.module('heyIamHereApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
