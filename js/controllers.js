'use strict';

angular.module('karel.controllers', [])

.controller('ApplicationController', function($scope) {
    $scope.feed = [
        {
            "name": "BlackBerry Is Here To Stay",
            "url": "/blog/2014/07/11/blackberry-here-to-stay",
            "external": false,
            "type": "blog",
            "date": 1405051200000
        },
        {
            "name": "1 Million Music Moments",
            "url": "http://1MMM.org",
            "external": true,
            "type": "work",
            "img": "/img/work/1MMM-cover.jpg"
        },
        {
            "name": "Flow",
            "url": "/construction",
            "external": false,
            "type": "work",
            "img": "/img/work/flow-cover.jpg"
        },
        {
            "name": "Dimensions",
            "url": "http://dimensions.karel.ca",
            "external": true,
            "type": "work",
            "img": "/img/work/dimensions-cover.jpg"
        },
        {
            "name": "Clinico",
            "url": "http://ctdesign.challengepost.com/submissions/17791-clinico",
            "external": true,
            "type": "work",
            "img": "/img/work/clinico-cover.jpg"
        },
        {
            "name": "Cooler",
            "url": "http://bit.ly/coolerbb",
            "external": true,
            "type": "work",
            "img": "/img/work/cooler-cover.jpg"
        },
        {
            "name": "Cella",
            "url": "http://bit.ly/cellabbw",
            "external": true,
            "type": "work",
            "img": "/img/work/cella-cover.jpg"
        }
    ]
})
