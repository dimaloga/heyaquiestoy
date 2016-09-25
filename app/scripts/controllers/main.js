'use strict';

/**
 * @ngdoc function
 * @name heyIamHereApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the heyIamHereApp
 */
angular.module('heyIamHereApp').controller('MainCtrl', function ($scope, $rootScope) {
    console.log('Ahora si te tenemos en la mira');

  $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBaU4xLICEvs3_uxtqpa0zC7YhgQWh9jL0";

     $scope.logLatLng = function(e) {
          console.log("logLatLng");
          console.log('loc', e.latLng);
    }
    
    $scope.wayPoints = [
          {location: {lat:44.32384807250689, lng: -78.079833984375}, stopover: true},
          {location: {lat:44.55916341529184, lng: -76.17919921875}, stopover: true},
    ];

    console.log('Termina el controlador');

  });