//".read": "auth.id == '2176291'"
angular.module('FireServices', [])
.factory('ServicioInscripcion', function ($rootScope, angularFireCollection){
    return {
        alta: function(usuario){
        		var url = 'https://interzonas.firebaseio.com/altas';
                        console.log(angularFireCollection(new Firebase(url)));   
        		//var altas = angularFireCollection(new Firebase(url).limit(60));
                var altas = angularFireCollection(new Firebase(url));
        		altas.add(usuario);
            return "correcto";
        },
        sayGoodbye: function(text){
            return "Factory says \"Goodbye " + text + "\"";
        }  
    }               
});