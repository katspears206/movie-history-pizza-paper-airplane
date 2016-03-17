"use strict";

var app = angular.module("movieHistory", ['ngRoute'])
  .constant('firebaseURL', 'https://mb-movie-history.firebaseio.com/');  // ngRoute object from angular-route is dependency -- needed to run

app.config(['$routeProvider',  // $routeProvider object is given to us by ngRoute
  function($routeProvider) {
    $routeProvider.  // note similarity of this syntax to switch/case
      when('/', {
        templateUrl: 'partials/root.html',
        controller: 'RootCtrl'
      }).
      when('/findNew', {
        templateUrl: 'partials/find-new.html',
        controller: 'FindNewCtrl'
      }).
      when('/searchYour', {
        templateUrl: 'partials/search-your.html',
        controller: 'SearchYourCtrl'
      }).
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).
      when('/searchresults', {
        templateUrl: 'partials/search-results.html',
        controller: 'ResultsCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);