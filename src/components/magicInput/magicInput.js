/**
 * Created by zerocool on 4/6/15.
 */

'use strict';

angular.module('ajs13').directive('jbMask', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      jbMask: '@'
    },
    link: function($scope, $element, $attr, ngModel) {
      var mask = $scope.jbMask;

      function isValid(value, mask) {
        if(value.length !== mask.length) {
          return false;
        }
        for (var i = 0; i < value.length; i++) {
          if (value[i] === mask[i]) {
            continue;
          }
          if (value[i].match(/[0-9]/) && mask[i] != '9') {
            return false;
          } else if (value[i].match(/[A-z]/) && mask[i] != 'a') {
            return false;
          }
        }
        return true;
      }


      ngModel.$parsers.push(function(value){
        if (isValid(value, mask)) {
          return value;
        } else if (value && value.length > 0 && !isValid(value, mask.substr(0, value.length))) {
          $element.val(undefined);
          return undefined;
        }
      });

      ngModel.$formatters.push(function(value) {
        if (value) {
          if(isValid(value, mask)) {
            return value;
          } else {
            return undefined;
          }
        }
      });
    }
  }
});
