'use strict';

/**
 * @ngdoc function
 * @name heyIamHereApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the heyIamHereApp
 */
//angular.module('heyIamHereApp', ['heyIamHereAppService']);

angular.module('heyIamHereApp').controller('MainCtrl', function ($scope, $rootScope) {

  console.log("Entra al controlador");

  $rootScope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBaU4xLICEvs3_uxtqpa0zC7YhgQWh9jL0";

     $rootScope.logLatLng = function() {
          console.log("logLatLng");
    };
    
    $rootScope.wayPointOrigin = [
          6.263583, -75.567667
    ];
    $rootScope.wayPointDestination = [
          6.283583, -75.567667
    ];

    $rootScope.wayPointDestinationLast = [
      6.293583,-75.567667
    ];
   var points = [{latitud: 6.263583, longitud: -75.567667}, {latitude:  6.293583, longitude: -75.567667},  {latitude:  6.213583, longitude: -75.567667}]

 
  // for (var i = 0; i< points.length;i++){
  //   $rootScope.wayPointOrigin = [
  //     points[i].latitud, points[i].longitud
  //   ];
  // }

  
    $scope.posts={};

    /*$scope.getAllPosts = function(){
      testRequest.posts().success(function (data){
        $scope.posts=data; // Asignaremos los datos de todos los posts
        $scope.posts.exist=1;
      });
    }

    $scope.getPost = function(){  
      $scope.unPost={};
      testRequest.post($scope.post_id).success(function (data){
        $scope.unPost=data; // Asignaremos los datos del post
        $scope.unPost.exist=1;
        $scope.posts.exist=0;
      });
    }*/

    console.log("Sale del controlador");
  });
