'use strict';

angular.module('karel.controllers', [])

.controller('ApplicationController', function($scope) {
  $scope.feed = [
    {
      "name": "Toronto Youth Cabinet",
      "description": "The City of Toronto's official youth advisory body since 1998.",
      "url": "http://thetyc.ca",
      "external": true,
      "tags": [
        "work",
        "web"
      ],
      "img": "/img/work/tyc-cover.jpg"
    },
    {
      "name": "1 Million Music Moments",
      "url": "http://1MMM.org",
      "external": true,
      "tags": [
        "work",
        "web"
      ],
      "img": "/img/work/1MMM-cover.jpg"
    },
    {
      "name": "Flow",
      "url": "/construction",
      "external": false,
      "tags": [
        "work",
        "web"
      ],
      "img": "/img/work/flow-cover.jpg"
    },
    {
      "name": "Casa",
      "url": "/construction",
      "external": false,
      "tags": [
        "work",
        "web",
        "hackathon"
      ],
      "img": "/img/work/casa-cover.jpg"
    },
    {
      "name": "Dimensions",
      "url": "http://dimensions.karel.ca",
      "external": true,
      "tags": [
        "work",
        "web"
      ],
      "img": "/img/work/dimensions-cover.jpg"
    },
    {
      "name": "Clinico",
      "url": "http://ctdesign.challengepost.com/submissions/17791-clinico",
      "external": true,
      "tags": [
        "work",
        "mobile",
        "contest"
      ],
      "img": "/img/work/clinico-cover.jpg"
    },
    {
      "name": "Curo",
      "url": "/construction",
      "external": false,
      "tags": [
        "work",
        "web",
        "hackathon"
      ],
      "img": "/img/work/clinico-cover.jpg"
    },
    {
      "name": "Cooler",
      "url": "http://bit.ly/coolerbb",
      "external": true,
      "tags": [
        "work",
        "mobile"
      ],
      "img": "/img/work/cooler-cover.jpg"
    },
    {
      "name": "Cella",
      "url": "http://bit.ly/cellabbw",
      "external": true,
      "tags": [
        "work",
        "mobile"
      ],
      "img": "/img/work/cella-cover.jpg"
    }
  ]
})
