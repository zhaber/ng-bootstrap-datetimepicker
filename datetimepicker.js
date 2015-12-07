angular.module('ui.bootstrap.datetimepicker',
    ["ui.bootstrap.dateparser", "ui.bootstrap.datepicker", "ui.bootstrap.timepicker"]
  )
  .directive('datepickerPopup', function (){
   return {
    restrict: 'EAC',
    require: 'ngModel',
    link: function(scope, element, attr, controller) {
      //remove the default formatter from the input directive to prevent conflict
      controller.$formatters.shift();
    }
   }
  })
  .directive('datetimepicker', [
    function() {
      if (angular.version.full < '1.1.4') {
        return {
          restrict: 'EA',
          template: "<div class=\"alert alert-danger\">Angular 1.1.4 or above is required for datetimepicker to work correctly</div>"
        };
      }
      return {
        restrict: 'EA',
        require: 'ngModel',
        scope: {
          ngModel: '=',
          dayFormat: "=",
          monthFormat: "=",
          yearFormat: "=",
          dayHeaderFormat: "=",
          dayTitleFormat: "=",
          monthTitleFormat: "=",
          startingDay: "=",
          yearRange: "=",
          dateFormat: "=",
          minDate: "=",
          maxDate: "=",
          dateOptions: "=",
          dateDisabled: "&",
          hourStep: "=",
          minuteStep: "=",
          showMeridian: "=",
          meredians: "=",
          mousewheel: "=",
          readonlyTime: "=",
          readonlyDate: "=",
          hiddenTime: "=",
          hiddenDate: "="
        },
        template: function(elem, attrs) {
          function dashCase(name, separator) {
            return name.replace(/[A-Z]/g, function(letter, pos) {
              return (pos ? '-' : '') + letter.toLowerCase();
            });
          }

          function createAttr(innerAttr, dateTimeAttrOpt) {
            var dateTimeAttr = angular.isDefined(dateTimeAttrOpt) ? dateTimeAttrOpt : innerAttr;
            if (attrs[dateTimeAttr]) {
              return dashCase(innerAttr) + "=\"" + dateTimeAttr + "\" ";
            } else {
              return '';
            }
          }

          function createFuncAttr(innerAttr, funcArgs, dateTimeAttrOpt) {
            var dateTimeAttr = angular.isDefined(dateTimeAttrOpt) ? dateTimeAttrOpt : innerAttr;
            if (attrs[dateTimeAttr]) {
              return dashCase(innerAttr) + "=\"" + dateTimeAttr + "({" + funcArgs + "})\" ";
            } else {
              return '';
            }
          }

          function createEvalAttr(innerAttr, dateTimeAttrOpt) {
            var dateTimeAttr = angular.isDefined(dateTimeAttrOpt) ? dateTimeAttrOpt : innerAttr;
            if (attrs[dateTimeAttr]) {
              return dashCase(innerAttr) + "=\"" + attrs[dateTimeAttr] + "\" ";
            } else {
              return dashCase(innerAttr) + " ";
            }
          }

          function createAttrConcat(previousAttrs, attr) {
            return previousAttrs + createAttr.apply(null, attr)
          }
          var dateTmpl = "<div class=\"datetimepicker-wrapper\">" +
            "<input class=\"form-control\" type=\"text\" " +
              "ng-click=\"open($event)\" " +
              "ng-change=\"date_change($event)\" " +
              "is-open=\"opened\" " +
              "ng-model=\"ngModelDatepicker\" " + [
              ["minDate"],
              ["maxDate"],
              ["dayFormat"],
              ["monthFormat"],
              ["yearFormat"],
              ["dayHeaderFormat"],
              ["dayTitleFormat"],
              ["monthTitleFormat"],
              ["startingDay"],
              ["yearRange"],
              ["datepickerOptions", "dateOptions"],
              ["ngHide", "hiddenDate"],
              ["ngDisabled", "readonlyDate"]
          ].reduce(createAttrConcat, '') +
            createFuncAttr("dateDisabled", "date: date, mode: mode") +
            createEvalAttr("uibDatepickerPopup", "dateFormat") +
            createEvalAttr("currentText", "currentText") +
            createEvalAttr("clearText", "clearText") +
            createEvalAttr("closeText", "closeText") +
            createEvalAttr("placeholder", "placeholder") +
            "/>\n" +
            "</div>\n";
          var timeTmpl = "<div class=\"datetimepicker-wrapper\" ng-model=\"time\" ng-change=\"time_change()\" style=\"display:inline-block\">\n" +
            "<uib-timepicker " + [
              ["hourStep"],
              ["minuteStep"],
              ["showMeridian"],
              ["meredians"],
              ["mousewheel"],
              ["ngHide", "hiddenTime"],
              ["readonlyInput", "readonlyTime"]
            ].reduce(createAttrConcat, '') +
            createEvalAttr("showSpinners", "showSpinners") +
            "></timepicker>\n" +
            "</div>";
          var tmpl = dateTmpl + timeTmpl + ' <span class="label label-info" ng-click="now()">当前</span>';
          return tmpl;
        },
        controller: ['$scope', '$element', '$timeout',
          function($scope, $element, $timeout) {
            $scope.date_change = function() {
              // If we changed the date only, set the time (h,m) on it.
              // This is important in case the previous date was null.
              // This solves the issue when the user set a date and time, cleared the date, and chose another date,
              // and then, the time was cleared too - which is unexpected
              var time = $scope.time;
              if ($scope.ngModelDatepicker) { // if this is null, that's because the user cleared the date field
                $scope.ngModelDatepicker.setHours(time.getHours(), time.getMinutes(), 0, 0);
              }
            };

            $scope.time_change = function() {
              if ($scope.ngModelDatepicker && $scope.time) {
                // convert from ISO format to Date
                if (!($scope.ngModelDatepicker instanceof Date)) $scope.ngModelDatepicker = new Date($scope.ngModelDatepicker);
                $scope.ngModelDatepicker.setHours($scope.time.getHours(), $scope.time.getMinutes(), 0, 0);
                $scope.ngModel = moment($scope.ngModelDatepicker.toISOString()).format("YYYY-MM-DD HH:mm:ss");
              }
            };
            $scope.open = function($event) {
              $event.preventDefault();
              $event.stopPropagation();
              $scope.opened = true;
            };
            
            $scope.now = function () {
              $scope.ngModelDatepicker = new Date();
            }


          }
        ],
        //compile: function (tElement, tAttrs) {
        //  return function link(scope, element, attrs, ctrl, transcludeFn) {
        //    console.log('link');
        //    $compile(element)(scope);
        //  }
        //}

        link: function(scope, element) {
          var firstTimeAssign = true;
          var isSet = false;

          scope.ngModelDatepicker = undefined;

          scope.$watch(function() {
            if(!isSet && typeof scope.ngModel != "undefined" && scope.ngModel != "") {
              isSet = true;
              var newDate = new Date(scope.ngModel);
              if(newDate != "Invalid Date") {
                scope.ngModelDatepicker = newDate;
              }
            }
            return scope.ngModelDatepicker;
          }, function(newTime) {
            // if a time element is focused, updating its model will cause hours/minutes to be formatted by padding with leading zeros
            if (element.children()[1] && !element.children()[1].contains(document.activeElement)) {
              if (typeof newTime == "undefined" || newTime === null || newTime === '') { // if the newTime is not defined
                if (firstTimeAssign && !isSet) { // if it's the first time we assign the time value
                  // create a new default time where the hours, minutes, seconds and milliseconds are set to 0.
                  newTime = new Date();
                  newTime.setHours(0, 0, 0, 0);
                } else { // just leave the time unchanged
                  return;
                }
              }

              // Update timepicker (watch on ng-model in timepicker does not use object equality),
              // also if the ngModel was not a Date, convert it to date
              newTime = new Date(newTime);
              scope.time = newTime; // change the time

              if(!firstTimeAssign) {
                scope.ngModel = moment(newTime.toISOString()).format("YYYY-MM-DD HH:mm:ss");
              }
              if (firstTimeAssign) {
                firstTimeAssign = false;
              }
            }
          }, true);
        }
      }
    }
  ]);
