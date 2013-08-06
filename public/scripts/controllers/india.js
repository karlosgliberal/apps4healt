'use strict';

angular.module('apps4healtApp')
  .controller('IndiaCtrl', function ($scope, ServicioInscripcion, Correo) {
  	$scope.proyecto = 'India';
 		$scope.casa = 'no'; 
 		$scope.libre = false;


    $scope.showBox = function (){
      $scope.hidden = false;
      $timeout(function() {
        $scope.hidden =true;
      }, 3000)
    }

		$scope.addMessage = function() {
			var usuario = {
      	nombreApellidos: $scope.nombre, 
      	email: $scope.email,
      	telefono: $scope.telefono,
      	alojamiento: $scope.casa,
      	procedencia: $scope.lugar,
      	bio: $scope.bio,
      	proyecto: 'India',
      	appLibre: ($scope.libre) ? $scope.appLibre : '' 
    	};
	    ServicioInscripcion.alta(usuario);
      $scope.showBox();
      Correo.enviar(usuario, function (data){
      });
    	$scope.nombre = "";
    	$scope.email = "";
    	$scope.telefono = "";
    	$scope.bio  = "";   
  }
});
