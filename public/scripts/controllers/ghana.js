'use strict';

angular.module('apps4healtApp')
  .controller('GhanaCtrl', function ($scope, ServicioInscripcion, Correo) {
  	$scope.proyecto = 'Ghana';
 		$scope.casa = 'no'; 
 		$scope.libre = false;

	  $scope.movida = function (){
      ServicioInscripcion.alta({}, {hola:'hola', adios:'adios'});
      /*
	    Correo.enviar({id:'hola', data:{texto:'hola', coment:'adios'}}, function(datos){
	    			console.log(datos);
	    });
      */
	  }

		$scope.addMessage = function() {
			var usuario = {
      	nombreApellidos: $scope.nombre, 
      	email: $scope.email,
      	telefono: $scope.telefono,
      	alojamiento: $scope.casa,
      	procedencia: $scope.lugar,
      	bio: $scope.bio,
      	proyecto: 'Ghana',
      	appLibre: ($scope.libre) ? $scope.appLibre : '' 
    	};
	    ServicioInscripcion.alta({}, usuario);

      Correo.enviar(usuario, function (a){
            console.log(a);
      });

	    /*
    	$scope.nombre = "";
    	$scope.email = "";
    	$scope.telefono = "";
    	$scope.bio  = "";   
    	*/
  }
});
