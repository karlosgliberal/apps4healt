'use strict';

angular.module('apps4healtApp')
  .controller('UsersCtrl', function ($scope, angularFire) {
    var url = 'https://interzonas.firebaseio.com/altas';
  var promise = new angularFire(url, $scope, 'messages', {});

  promise.then(function(){
    $scope.addMessage = function() {
          console.log($scope.messages);
      if ($scope.messages[$scope.message]) {
        throw new Error("User already exists!");
      } else {
        //$scope.messages[name] ={from:'karlos', content: 'movida'};
      }

      //$scope.messages.push({from:'karlos', content: $scope.message});
      //$scope.message = "";
    }

    $scope.delMessage = function(id) {
      var removeRef = new Firebase('https://interzonas.firebaseio.com/altas/'+id);
      removeRef.remove();
    }
  });
	//$scope.messages = angularFireCollection(new Firebase(url).limit(50));
	//var datos = $scope.messages;
  });
