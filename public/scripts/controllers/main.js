'use strict';

angular.module('apps4healtApp')
  .controller('MainCtrl', function ($scope, $location) {
  	
 	$scope.go = function (path) {
     	$location.path(path);
  	}
   
});
