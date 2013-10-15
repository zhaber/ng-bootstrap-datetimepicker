angular.module("ui.bootstrap", ["ui.bootstrap.datetimepicker"]);
angular.module("ui.bootstrap.tpls", ["template/datetimepicker/datetimepicker.html"]);

angular.module('ui.bootstrap.datetimepicker', [])
.controller('DatetimepickerController', ['$scope', '$attrs', function($scope, $attrs) {
  this.datetimepicker_time_changed = function() {

  }
}])
.directive('datetimepicker', ['$parse', '$log', 'datetimepickerConfig', function ($parse, $log, timepickerConfig) {
  return {
    restrict: 'EA',
    require:'?^ngModel',
    replace: true,
    scope: {},
    templateUrl: 'template/datetimepicker/datetimepicker.html',
    link: function(scope, element, attrs, ngModel) {
      if (!ngModel) {
        return;
      }
      
    }
  }
});

angular.module("template/datetimepicker/datetimepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datetimepicker/datetimepicker.html",
    "<div class=\"datetimepicker-wrapper\">" +
      "<input dayFormat=\"dayFormat\" monthFormat=\"monthFormat\" yearFormat=\"yearFormat\" dayHeaderFormat=\"dayHeaderFormat\" dayTitleFormat=\"dayTitleFormat\" monthTitleFormat=\"monthTitleFormat\" showWeeks=\"showWeeks\" startingDay=\"startingDay\" yearRange=\"yearRange\" type=\"text\" datepicker-popup=\"{{dateFormat}}\" ng-model=\"datetimepicker_date\" min=\"minDate\" max=\"maxDate\" datepicker-options=\"dateOptions\" date-disabled=\"disabled(date, mode)\" ng-required=\"true\" />\n" +
    "</div>" +
    "<div class=\"datetimepicker-wrapper\" ng-model=\"datetimepicker_time\" ng-change=\"datetimepicker_time_changed()\" style=\"display:inline-block;\">\n" +
      "<timepicker hour-step=\"hourStep\" minute-step=\"minuteStep\" show-meridian=\"showMeridian\" meredians=\"meredians\" mousewheel=\"mousewheel\"></timepicker>\n" +
    "</div>");
}]);
