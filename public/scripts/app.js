'use strict';

angular.module('apps4healtApp', ['firebase', 'ngGrid', 'inscripcion', 'angular-flash.service', 'angular-flash.flash-alert-directive'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ghana', {
        templateUrl: 'views/ghana.html',
        controller: 'GhanaCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/alta', {
        templateUrl: 'views/alta.html',
        controller: 'AltaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
