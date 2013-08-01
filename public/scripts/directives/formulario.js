angular.module('inscripcion', [])
  // Register the 'myCurrentTime' directive factory method.
  // We inject $timeout and dateFilter service since the factory method is DI.
  .directive('formularioInscripcion', function() {
    return {
      restrict: 'A',
      replace: false,
      templateUrl: "views/inscripcion.html"
    };
    // return the directive link function. (compile function not needed)
  });
