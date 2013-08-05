'use strict';
angular.module('EnvioCorreoService',[]).
	factory('Correo', function ($location, $http){
    return {
      enviar: function (usuario){
        $http({
            url: 'http://apps4health.es/correo',
            method: "POST",
            data: usuario,
            //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data, status, headers, config) {
              console.log(data);
        }).error(function (data, status, headers, config) {
              console.log(data);
        });
      }
    }
	}); 
