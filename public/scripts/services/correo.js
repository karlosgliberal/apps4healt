'use strict';
angular.module('EnvioCorreoService',['ngResource']).
	factory('Correo', function($resource, $location){
	var Correo = $resource('http://localhost\\:4000/correo',{}, { 
      	enviar: {
          method: 'POST',
          isArray: true
      	}
    	}); 
    	return Correo;
	}); 
