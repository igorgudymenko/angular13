angular.module('ajs13').directive('jbCarousel', function($interval) {

  return {
    restrict: 'E',
    scope: {
      jbItems: "=",
      jbAction: "&"
    },
    transclude: true,
    replace: true,
    template: '<div class="cards" ng-mouseover=stop() ng-mouseleave=start()></div>',
    compile: function compile (element, attrs, $transcludeFn) {

      var cards = [];
      var state = false;
      var template = angular.element('<div class="card {{card.className}}" ng-repeat="card in jbItems" ng-click="selectCard(card)"></div>');
      $transcludeFn(
        element.scope(),
        function(clone) {
          template.append(clone);
        });
      element.append(template);

      return {
        pre: function preLink(scope) {
          scope.selectCard = function(item) {
            alert(item);
          };
          scope.stop = function() {
            state = true;
          };
          scope.start = function() {
            state = false;
          };

          for (var i = 0; i < scope.jbItems.length; i++) {
            var className = "card-" + i;
            scope.jbItems[i]["className"] = className;
            cards.push(className);
          }
        },

        post: function postLink(scope) {
          function updateTime() {
            if (!state) {
              cards.push(cards.shift());

              for (var t = 0; t < scope.jbItems.length; t++) {
                scope.jbItems[t]["className"] = cards[t];
              }
            }
          }
          $interval(updateTime, 4000);


        }
      }
    }
  }
});
