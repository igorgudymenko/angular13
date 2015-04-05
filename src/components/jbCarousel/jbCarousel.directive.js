angular.module('ajs13').directive('jbCarousel', function() {

  return {
    restrict: 'E',
    scope: {
      jbItems: '=',
      jbAction: '&'
    },
    transclude: false,
    templateNamespace: 'html',
    controller: function($scope, $element, $attrs) {

    },
    compile: function(element, attrs) {
      return {
        pre: function preLink(scope, iElement, iAttrs, controller) {

        },
        post: function postLink(scope, iElement, iAttrs, controller) {

        }
      }
    }
  }
});
