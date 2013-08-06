/*global angular, Firebase */
angular.module('FireServices', [])
  .factory('ServicioInscripcion', function ($rootScope, angularFireCollection) {
    return {
      alta: function (usuario) {
        var url = 'https://interzonas.firebaseio.com/altas/';
        var messages = angularFireCollection(new Firebase(url).limit(50));
        return messages.add(usuario);
      }
    };
  });