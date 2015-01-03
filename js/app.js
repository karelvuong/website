  'use strict';

// Declare app level module which depends on filters, and services
angular.module('karel', [
  'ngSanitize',
  'ui.router',
  'duScroll',
  'karel.controllers',
  'karel.directives'
])

.run(function($rootScope, $state, $location){
  $rootScope.$on("$viewContentLoaded", function(){
    $('html body').scrollTop(0);
  });
})

.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('home', {
    url: "/",
    views: {
      "site": {
        templateUrl: "/views/home.html"
      }
    }
  })
  .state('construction', {
    url: "/construction",
    views: {
      "site": {
        templateUrl: "/views/construction.html"
      }
    }
  })
  .state('resume', {
    url: "/resume",
    views: {
      "site": {
        templateUrl: "/views/resume.html"
      }
    }
  })
  .state('w-flow', {
    url: "/w/flow",
    views: {
      "site": {
        templateUrl: "/views/w/flow.html"
      }
    }
  })
});
