angular.module('ui.bootstrap.datetimepicker', ["ui.bootstrap"])
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
    template: function(elem, attrs) {
      function dashCase(name, separator){
        return name.replace(/[A-Z]/g, function(letter, pos) {
         return (pos ? '-' : '') + letter.toLowerCase();
        });
      }    
      function createTimeAttr(timeAttr, dateTimeAttrOpt) {
        var dateTimeAttr = angular.isDefined(dateTimeAttrOpt) ? dateTimeAttrOpt : timeAttr;
        if (attrs[dateTimeAttr]) {
          return dashCase(timeAttr) +  "=\"" + dateTimeAttr + "\" ";
        } else {
          return '';
        }
      }
      function createDateAttr(dateAttr, dateTimeAttrOpt) {
        var dateTimeAttr = angular.isDefined(dateTimeAttrOpt) ? dateTimeAttrOpt : dateAttr;
        if (attrs[dateTimeAttr]) {
          return dashCase(dateAttr) + "=\"" + dateTimeAttr + "\" ";
        } else {
          return '';
        }
      }
      function createMainDateAttr(dateAttr, dateTimeAttrOpt) {
        var dateTimeAttr = angular.isDefined(dateTimeAttrOpt) ? dateTimeAttrOpt : dateAttr;
        if (attrs[dateTimeAttr]) {
          return dashCase(dateAttr) + "=\"" + attrs[dateTimeAttr] + "\" ";
        } else {
          return dashCase(dateAttr);
        }
      }
      var tmpl = "<div class=\"datetimepicker-wrapper\">" +
        "<input type=\"text\" ng-model=\"ngModel\" " +
          createDateAttr("min", "minDate") +
          createDateAttr("max", "maxDate") +
          createDateAttr("dayFormat") +
          createDateAttr("monthFormat") +
          createDateAttr("yearFormat") +
          createDateAttr("dayHeaderFormat") +
          createDateAttr("dayTitleFormat") +
          createDateAttr("monthTitleFormat") +
          createDateAttr("showWeeks") +
          createDateAttr("startingDay") +
          createDateAttr("yearRange") +
          createDateAttr("datepickerOptions", "dateOptions") +
          createMainDateAttr("datepickerPopup", "dateFormat") +
        "/>\n" +
      "</div>\n" +
      "<div class=\"datetimepicker-wrapper\" ng-model=\"time\" ng-change=\"time_change()\" style=\"display:inline-block\">\n" +
        "<timepicker " + 
          createTimeAttr("hourStep") +
          createTimeAttr("minuteStep") +
          createTimeAttr("showMeridian") +
          createTimeAttr("meredians") +
          createTimeAttr("mousewheel") + 
        "></timepicker>\n" +
      "</div>";
      return tmpl;
    },
    controller: ['$scope', function($scope) {
      $scope.time_change = function() {
        if (angular.isDefined($scope.ngModel) && angular.isDefined($scope.time)) {
          $scope.ngModel.setHours($scope.time.getHours(), $scope.time.getMinutes());
        }
      }
    }],
    link: function(scope) {
      scope.$watch(function() {
          return scope.ngModel;
        }, function(ngModel) {
          scope.time = ngModel;
      });
    }
  }
}]);
