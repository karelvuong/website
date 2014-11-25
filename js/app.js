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
    $rootScope.state = $state.$current.self.name;
  });

  $rootScope.$on('duScrollspy:becameActive', function($event, $element){
    var hash = $element.prop('hash');
    if (hash) {
      $location.hash(hash.substr(1)).replace();
      $rootScope.$apply();
    }
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
  .state('about', {
    url: "/about",
    views: {
      "site": {
        templateUrl: "/views/about.html"
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
  .state('portfolio.casa', {
    url: "/casa",
    templateUrl: "/views/portfolio/casa.html"
  })
  .state('portfolio.flow', {
    url: "/flow",
    templateUrl: "/views/portfolio/flow.html"
  })
});
