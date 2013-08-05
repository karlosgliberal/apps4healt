//".read": "auth.id == '2176291'"
angular.module('FireServices', [])
.factory('ServicioInscripcion', function ($rootScope, angularFireCollection){
    return {
        alta: function(usuario){
                var url = 'https://interzonas.firebaseio.com/altas/';
                var messages = angularFireCollection(new Firebase(url).limit(50));
                //var altas = angularFireCollection(new Firebase(url).limit(60));
        		//var url = 'https://interzonas.firebaseio.com/altas';
                //var altas = angularFireCollection(new Firebase(url));
        		return messages.add(usuario);
        },
        sayGoodbye: function(text){
            return "Factory says \"Goodbye " + text + "\"";
        }  
    }               
});