angular.module('FireServices', [])
.factory('ServicioInscripcion', function ($rootScope, angularFireCollection){
    return {
        alta: function(usuario){
        		var url = 'https://interzonas.firebaseio.com/altas/';
        		var altas = angularFireCollection(new Firebase(url).limit(60));
        		altas.add(usuario, function(dato, dato2){
        					console.log(dato2);
        		});
            return "correcto";
        },
        sayGoodbye: function(text){
            return "Factory says \"Goodbye " + text + "\"";
        }  
    }               
});