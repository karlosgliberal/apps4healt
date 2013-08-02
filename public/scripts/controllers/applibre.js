'use strict';

angular.module('apps4healtApp')
  .controller('ApplibreCtrl', function ($scope, ServicioInscripcion) {
  	$scope.proyecto = 'App Libre';
 		$scope.casa = 'no'; 
 		$scope.libre = true;
		$scope.addMessage = function() {
			var usuario = {
      	nombreApellidos: $scope.nombre, 
      	email: $scope.email,
      	telefono: $scope.telefono,
      	alojamiento: $scope.casa,
      	procedencia: $scope.lugar,
      	bio: $scope.bio,
      	proyecto: 'App Libre',
      	appLibre: ($scope.libre) ? $scope.appLibre : '' 
    	};
	    ServicioInscripcion.alta(usuario);
    	$scope.nombre = "";
    	$scope.email = "";
    	$scope.telefono = "";
    	$scope.bio  = "";   
  }
});

