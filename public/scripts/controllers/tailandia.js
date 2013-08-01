'use strict';

angular.module('apps4healtApp')
  .controller('TailandiaCtrl', function ($scope, $location) {
  	
 	$scope.go = function (path) {
     	$location.path(path);
  	}
   
});
