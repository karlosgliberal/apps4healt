'use strict';

angular.module('apps4healtApp')
  .controller('AltaCtrl', function ($scope, angularFireCollection, angularFireAuth, flash) {
    var urlAuth = 'https://interzonas.firebaseio.com/';
    angularFireAuth.initialize(urlAuth, {
      scope: $scope,
      name: "user",
      callback:
        function (err, user) {
        // Called whenever there is a change in authentication state.
        }
    });
    $scope.template = { name: 'template1.html', url: 'views/inscripcion.html'};
    $scope.login = function () {
      angularFireAuth.login("twitter", {remember: true});
    };

    $scope.logout = function () {
      angularFireAuth.logout();
    };

    var url = 'https://interzonas.firebaseio.com/altas/';
    var fb = new Firebase(url);
	  $scope.messages = angularFireCollection(new Firebase(url).limit(50));
    $scope.movida =true;
    $scope.flash = function(){
    $scope.movida = false;
    flash.success = 'Do it live!';
  }
	$scope.addMessage = function() {
  	$scope.messages.add({
      nombreApellidos: $scope.nombre, 
      email: $scope.email,
      telefono: $scope.telefono,
      //alojamientoSi: $scope.alojamientoSi,      
      alojamientoNo: 'no',
      bio: $scope.bio,
      proyecto: $scope.proyecto,
      appLibre: $scope.appLibre
    });

    $scope.nombre = "";
    $scope.email = "";
    $scope.telefono = "";
    $scope.alogamientoSi = "";
    $scope.alogamientoNo = "";
    $scope.bio  = "";   
    $scope.proyecto = "";
    $scope.appLibre = "";

  }

	$scope.delMessage = function(id) {
		var removeRef = new Firebase('https://interzonas.firebaseio.com/altas/'+id);
		removeRef.remove();
  }
  });
