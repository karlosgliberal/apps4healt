'use strict';
angular.module('EnvioCorreoService',['ngResource']).
	factory('Correo', function($resource, $location){
	var Correo = $resource('http://localhost\\:4000/listado/:key', //add param to the url
      {key:$location.path()},
    	{ 
      	enviar: {
          	method: 'POST',
              isArray: true,
              params:{key:$location.path()}
      	}
    	}); 
    	return Correo;
	}); 
