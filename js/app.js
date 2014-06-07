'use strict';

// Declare app level module which depends on filters, and services
angular.module('curo', [
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'highcharts-ng',
    'curo.filters',
    'curo.services',
    'curo.directives',
    'curo.controllers'
])

.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('dashboard', {
            url: "/",
            templateUrl: "partials/dashboard.html"
        })
        .state('directory', {
            url: "/directory",
            templateUrl: "partials/clients/directory.html"
        })
        .state('report', {
            url: "/report",
            templateUrl: "partials/report.html"
        })
        .state('directory.client', {
            url: "/:clientId",
            templateUrl: "partials/clients/client.html"
        })
})