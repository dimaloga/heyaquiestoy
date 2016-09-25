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

  $rootScope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBaU4xLICEvs3_uxtqpa0zC7YhgQWh9jL0";

     $rootScope.logLatLng = function() {
          console.log("logLatLng");
    };

    $rootScope.wayPoints = [
          {location: {lat:44.32384807250689, lng: -78.079833984375}, stopover: true},
          {location: {lat:44.55916341529184, lng: -76.17919921875}, stopover: true},
     ];
    
    $rootScope.wayPointOrigin = [
          44.32384807250689, -78.079833984375
    ];

    $rootScope.wayPointDestination = [
          44.55916341529184, 
          -76.17919921875
    ];

    console.log('Termina el controlador');

  });