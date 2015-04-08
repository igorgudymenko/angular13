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

      function isValid(data, mask) {
        if (data.length !== mask.length) {
          return false;
        }
        for (var i = 0; i < data.length; i++) {
          if (data[i] === mask[i]) {
            continue;
          }
          if (data[i].match('/[0-9]/')) {
            if (data[i] !== 9 && mask[i] !== data[i]) {
              return false;
            } else {
              return;
            }

          }
          //if (data[i].test('/[0-9]/')) {
          //  if (mask[i] !== '9' && mask[i] !== data[i]) {
          //
          //  }
          //}
        }
      }

      // ui-mask

      var mask = $scope.jbMask;

      ngModel.$parsers.unshift(function (viewValue) {


        ngModel.$setValidity('valueValid', isValid(viewValue, mask));

        if (isValid(viewValue, mask)) {

          return viewValue;
        } else {

          return undefined;
        }


      });

      ngModel.$formatters.push(function (modelValue) {

        ngModel.$setValidity('valueValid', isValid(modelValue, mask));
        if (isValid(modelValue, mask)) {

          return modelValue;
        } else {

          return undefined;
        }
      });

      //ngModel.$validators.jbMask = function(modelValue) {
      //  if (isValid(modelValue, $scope.jbMask)) {
      //    modelValue = undefined;
      //  }
      //
      //  console.log(modelValue);
      //
      //  return modelValue === $scope.jbMask;
      //};

      // $parsers
      // $formatters

      //ngModel.$parsers

      //ngModel.$parsers.push(function() {
      //  isValid()
      //})

    }
  }
});
