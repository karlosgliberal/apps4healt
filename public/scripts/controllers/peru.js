'use strict';

angular.module('apps4healtApp')
  .controller('PeruCtrl', function ($scope, ServicioInscripcion) {
  	$scope.proyecto = 'Perú';
 		$scope.casa = 'no'; 
 		$scope.libre = false;
		$scope.addMessage = function() {
			var usuario = {
      	nombreApellidos: $scope.nombre, 
      	email: $scope.email,
      	telefono: $scope.telefono,
      	alojamiento: $scope.casa,
      	procedencia: $scope.lugar,
      	bio: $scope.bio,
      	proyecto: 'Perú',
      	appLibre: ($scope.libre) ? $scope.appLibre : '' 
    	};
	    ServicioInscripcion.alta(usuario);
    	$scope.nombre = "";
    	$scope.email = "";
    	$scope.telefono = "";
    	$scope.bio  = "";   
  }
});

