'use strict';

angular.module('apps4healtApp')
  .controller('PeruCtrl', function ($scope, $location) {
  	
 	$scope.go = function (path) {
     	$location.path(path);
  	}
   
});
