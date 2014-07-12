'use strict';

// Declare app level module which depends on filters, and services
angular.module('karel', [
    'ui.router',
    'headroom',
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
        templateUrl: "/partials/main.html"
    })
    .state('about', {
        url: "/about",
        templateUrl: "/partials/about.html"
    })
    .state('blog', {
        url: "/blog",
        templateUrl: "/partials/blog.html"
    })
    .state('post-test', {
        url: "/blog/2014/07/11/blackberry-here-to-stay",
        templateUrl: "/partials/blog/20140711-blackberry-here-to-stay.html"
    })
    .state('work', {
        url: "/work",
        templateUrl: "/partials/work.html"
    })
    .state('construction', {
        url: "/construction",
        templateUrl: "/partials/construction.html"
    })
});
