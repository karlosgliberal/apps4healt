'use strict';
angular.module('EnvioCorreoService',[]).
	factory('Correo', function ($location, $http, $location){
    return {
      enviar: function (usuario){
            console.log($location.host());
        var host = $location.host();
        $http({
            url: host+'/correo',
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
