'use strict';
angular.module('EnvioCorreoService',['ngResource']).
	factory('Correo', function($resource, $location){
	var Correo = $resource('http://localhost\\:4000/correo',{key:'hola'}, { 
      	enviar: {
          method: 'POST',
          isArray: true,
          params: {id:'jjj', hhh:'hggg'}
      	}
    	}); 
    	return Correo;
	}); 
