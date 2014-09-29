'use strict';

// Declare app level module which depends on filters, and services
angular.module('karel', [
  'ui.router',
  'karel.controllers',
  'karel.directives'
])

.run(function($rootScope, $state){
  $rootScope.$on("$viewContentLoaded", function(){
    $('html body').scrollTop(0);
    $rootScope.state = $state.$current.self.name;
  });
})

.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('home', {
    url: "/",
    views: {
      "page": {
        templateUrl: "/views/home.html"
      }
    }
  })
  .state('construction', {
    url: "/construction",
    views: {
      "page": {
        templateUrl: "/views/construction.html"
      }
    }
  })
});
