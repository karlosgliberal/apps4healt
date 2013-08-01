angular.module('footer', [])
  // Register the 'myCurrentTime' directive factory method.
  // We inject $timeout and dateFilter service since the factory method is DI.
  .directive('paginasFooter', function() {
    return {
      restrict: 'A',
      replace: false,
      templateUrl: "views/paginasFooter.html"
    };
    // return the directive link function. (compile function not needed)
  });
