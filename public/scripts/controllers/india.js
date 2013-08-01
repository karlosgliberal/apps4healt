'use strict';

angular.module('apps4healtApp')
  .controller('IndiaCtrl', function ($scope, $location) {
  	
 	$scope.go = function (path) {
     	$location.path(path);
  	}
   
});
