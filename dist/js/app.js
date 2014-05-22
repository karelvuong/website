'use strict';

// Declare app level module which depends on filters, and services
angular.module('karel', [
    'ngRoute',
    'karel.filters',
    'karel.services',
    'karel.directives',
    'karel.controllers',
])

.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html'
        })
        .otherwise({templateUrl: 'partials/main.html'});
});
