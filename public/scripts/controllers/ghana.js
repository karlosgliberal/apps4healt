'use strict';

angular.module('apps4healtApp')
  .controller('GhanaCtrl', function ($scope, $location) {
  	
 	$scope.go = function (path) {
     	$location.path(path);
  	}
   
});
