const app = angular.module("myApp", ["ngRoute"]);
      app.config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
          $routeProvider
            .when("/tourism", {
              templateUrl: "templates/tourism.html",
              
            })
            .when("/stats", {
              templateUrl: "stats.html",
              
            });
        //   $locationProvider.html5Mode(true);
        },
      ]);
      // app.controller("londonCtrl", function ($scope) {
      //   $scope.msg = "I love London";
      // });
      // app.controller("parisCtrl", function ($scope) {
      //   $scope.msg = "I love Paris";
      // });
