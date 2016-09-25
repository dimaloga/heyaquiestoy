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
          6.293583, -75.567667
    ];

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