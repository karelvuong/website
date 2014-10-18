"use strict";

angular.module('karel.controllers')
.controller('HomeController', function($scope) {
    $scope.feed = [
        {
          "name": "Flow",
          "date": "Ongoing",
          "url": "/construction",
          "external": false,
          "tags": [
            "work",
            "web"
          ],
          "img": "/img/work/flow-list.jpg"
        },
        {
          "name": "Casa",
          "date": "Ongoing",
          "url": "/construction",
          "external": false,
          "tags": [
            "work",
            "web",
            "hackathon"
          ],
          "img": "/img/work/casa-list.jpg"
        },
        {
          "name": "Toronto Youth Cabinet",
          "date": "July 2014",
          "url": "http://thetyc.ca",
          "external": true,
          "tags": [
            "work",
            "web"
          ],
          "img": "/img/work/tyc-list.jpg"
        },
        {
          "name": "1 Million Music Moments",
          "date": "May 2014",
          "url": "http://1MMM.org",
          "external": true,
          "tags": [
            "work",
            "web"
          ],
          "img": "/img/work/1MMM-list.jpg"
        },
        {
          "name": "Dimensions",
          "date": "Ongoing",
          "url": "http://dimensions.karel.ca",
          "external": true,
          "tags": [
            "work",
            "web"
          ],
          "img": "/img/work/dimensions-list.jpg"
        },
        {
          "name": "Clinico",
          "date": "June 2014",
          "url": "http://ctdesign.challengepost.com/submissions/17791-clinico",
          "external": true,
          "tags": [
            "work",
            "mobile",
            "contest"
          ],
          "img": "/img/work/clinico-list.jpg"
        },
        // {
        //   "name": "Curo",
        //   "url": "/construction",
        //   "external": false,
        //   "tags": [
        //     "work",
        //     "web",
        //     "hackathon"
        //   ],
        //   "img": "/img/work/clinico-list.jpg"
        // },
        {
            "name": "Cooler",
            "date": "December 2013",
            "url": "http://bit.ly/coolerbb",
            "external": true,
            "tags": ["work", "mobile"],
            "img": "/img/work/cooler-list.jpg"
        },
        {
            "name": "Cella",
            "date": "September 2013",
            "url": "http://bit.ly/cellabbw",
            "external": true,
            "tags": ["work", "mobile"],
            "img": "/img/work/cella-list.jpg"
        }
    ]
})
