/*global angular*/
'use strict';

angular.module('apps4healtApp', ['firebase', 'ngGrid', 'inscripcion', 'footer', 'angular-flash.flash-alert-directive', 'FireServices', 'EnvioCorreoService'])
  .value('firebaseUrl', 'https://interzonas.firebaseio.com/altas/')
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
      .when('/india', {
        templateUrl: 'views/india.html',
        controller: 'IndiaCtrl'
      })
      .when('/tailandia', {
        templateUrl: 'views/tailandia.html',
        controller: 'TailandiaCtrl'
      })
      .when('/peru', {
        templateUrl: 'views/peru.html',
        controller: 'PeruCtrl'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'MainCtrl'
      })
      .when('/premios', {
        templateUrl: 'views/premios.html',
        controller: 'MainCtrl'
      })
      .when('/apps4health', {
        templateUrl: 'views/apps4health.html',
        controller: 'MainCtrl'
      })
      .when('/hackathon', {
        templateUrl: 'views/hackathon.html',
        controller: 'MainCtrl'
      })
      .when('/listado', {
        templateUrl: 'views/listado.html',
        controller: 'ListadoCtrl'
      })
      .when('/applibre', {
        templateUrl: 'views/applibre.html',
        controller: 'ApplibreCtrl'
      })
      .when('/privacidad', {
        templateUrl: 'views/privacidad.html',
        controller: 'MainCtrl'
      })
      .when('/contacta', {
        templateUrl: 'views/contacta.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
