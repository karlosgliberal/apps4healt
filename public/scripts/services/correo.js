/*global angular*/
'use strict';
angular.module('EnvioCorreoService', []).
  factory('Correo', function ($location, $http) {
    return {
      enviar: function (usuario) {
        $http({
          url: 'http://' + $location.host() + '/correo',
          method: "POST",
          data: usuario
        }).success(function (data, status, headers, config) {
          console.log(data);
        }).error(function (data, status, headers, config) {
          console.log(data);
        });
      }
    };
  });
