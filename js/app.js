  'use strict';

// Declare app level module which depends on filters, and services
angular.module('karel', [
    'ngSanitize',
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
  .state('work', {
    url: "/work",
    views: {
      "site": {
        templateUrl: "/views/work/_layout.html"
      }
    }
  })
  .state('work.casa', {
    url: "/casa",
    templateUrl: "/views/work/casa.html"
  })
  .state('work.flow', {
    url: "/flow",
    templateUrl: "/views/work/flow.html"
  })
});
