/*global angular*/
'use strict';

angular.module('apps4healtApp')
  .controller('GhanaCtrl', function ($scope, ServicioInscripcion, Correo, $timeout) {
    $scope.proyecto = 'Ghana';
    $scope.casa = 'no';
    $scope.libre = false;
    $scope.hidden = true;
    $scope.acepto = false;
    $scope.showBox = function () {
      $scope.hidden = false;
      $timeout(function () {
        $scope.hidden = true;
      }, 3000);
    };
    $scope.addMessage = function () {
      var usuario = {
          nombreApellidos: $scope.nombre,
          email : $scope.email,
          telefono : $scope.telefono,
          alojamiento : $scope.casa,
          procedencia : $scope.lugar,
          bio : $scope.bio,
          proyecto : 'Ghana',
          appLibre : ($scope.appLibre) ? $scope.appLibre : '',
          informacion : ($scope.informacion) ? $scope.informacion : ''
        };
      ServicioInscripcion.alta(usuario);
      $scope.showBox();
      Correo.enviar(usuario, function (data) {
      });
      $scope.nombre = "";
      $scope.email = "";
      $scope.telefono = "";
      $scope.bio = "";
    };
  });
