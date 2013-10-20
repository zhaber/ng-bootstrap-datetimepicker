angular.module('ui.bootstrap.datetimepicker', ["ui.bootstrap", "template/datetimepicker/datetimepicker.html"])
.directive('datetimepicker', ['$parse', function ($parse) {
  return {
    restrict: 'EA',
    require:'ngModel',
    scope: {
      ngModel: '=',
      dayFormat: "=",
      monthFormat: "=",
      yearFormat: "=",
      dayHeaderFormat: "=", 
      dayTitleFormat: "=",
      monthTitleFormat: "=",
      showWeeks: "=",
      startingDay: "=",
      yearRange: "=",
      dateFormat: "=",
      minDate: "=",
      maxDate: "=",
      dateOptions: "=",
      hourStep: "=", 
      minuteStep: "=",
      showMeridian: "=", 
      meredians: "=",
      mousewheel: "="
    },
    templateUrl: 'template/datetimepicker/datetimepicker.html',
    controller: ['$scope', function($scope) {
      $scope.time_change = function() {
        if (angular.isDefined($scope.ngModel) && angular.isDefined($scope.time)) {
          $scope.ngModel.setHours($scope.time.getHours(), $scope.time.getMinutes());
        }
      }
    }],
    link: function(scope) {
      function setTimeValue(timeAttr, dateTimeAttrOpt) {
        var dateTimeAttr = angular.isDefined(dateTimeAttrOpt) ? dateTimeAttrOpt : timeAttr;
        // to be implemented
      }
      function setDateValue(dateAttr, dateTimeAttrOpt) {
        var dateTimeAttr = angular.isDefined(dateTimeAttrOpt) ? dateTimeAttrOpt : dateAttr;
        // to be implemented
      }
      function setParsedDateValue(dateAttr, dateTimeAttrOpt) {
        var dateTimeAttr = angular.isDefined(dateTimeAttrOpt) ? dateTimeAttrOpt : dateAttr;
        // to be implemented
      }

      setTimeValue("hour-step", "hourStep");
      setTimeValue("minute-step", "minuteStep");
      setTimeValue("show-meridian", "showMeridian")
      setTimeValue("meredians");
      setTimeValue("mousewheel");
      
      setDateValue("min", "minDate");
      setDateValue("max", "maxDate");
      setDateValue("dayFormat");
      setDateValue("monthFormat");
      setDateValue("yearFormat");
      setDateValue("dayHeaderFormat");
      setDateValue("dayTitleFormat");
      setDateValue("monthTitleFormat");
      setDateValue("showWeeks");
      setDateValue("startingDay");
      setDateValue("yearRange");
      setDateValue("datepicker-options", dateOptions);
      setParsedDateValue("datepicker-popup",  dateFormat);
      scope.$watch(function() {
          return scope.ngModel;
        }, function(ngModel) {
          scope.time = ngModel;
      });
    }
  }
}]);

angular.module("template/datetimepicker/datetimepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/datetimepicker/datetimepicker.html",
    "<div><div class=\"datetimepicker-wrapper\">" +
      "<input ng-model=\"ngModel\" datepicker-popup/>\n" +
    "</div>\n" +
    "<div class=\"datetimepicker-wrapper\" ng-change=\"time_change()\" ng-model=\"time\">\n" +
      "<timepicker></timepicker>\n" +
    "</div></div>");
}]);
