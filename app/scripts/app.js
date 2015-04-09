'use strict';

/**
 * @ngdoc overview
 * @name angualrSkyApp
 * @description
 * # angualrSkyApp
 *
 * Main module of the application.
 */
angular
  .module('angualrSkyApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });