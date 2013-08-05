'use strict';
angular.module('EnvioCorreoService',['ngResource']).
	factory('Correo', function($resource, $location){
	var Correo = $resource('http://localhost\\:4000/correo/:id',{data:'hola'}, { 
      	enviar: {
          method: 'POST',
          params: {id:'@id'},
          data:'@data'
      	}
    	}); 
    	return Correo;
	}); 
