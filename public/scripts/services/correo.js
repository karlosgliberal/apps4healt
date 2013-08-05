'use strict';
angular.module('EnvioCorreoService',['ngResource']).
	factory('Correo', function($resource, $location){
	var Correo = $resource('http://localhost\\:4000/correo/:id',{}, { 
      	enviar: {
          method: 'POST',
          isArray: true,
          params: {id:'@id'},
          data:{hola:'hola', adiis:'adios'}
      	}
    	}); 
    	return Correo;
	}); 
