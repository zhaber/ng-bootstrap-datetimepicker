<h3>Angular UI<br>Bootstrap Date Time Picker</h3>

Demo: http://plnkr.co/edit/zJOc40?p=preview

The control is based on AngularUI [Datepicker](https://github.com/angular-ui/bootstrap/tree/master/src/datepicker) and [Timepicker](https://github.com/angular-ui/bootstrap/tree/master/src/timepicker).

Date is formatted using the [date filter](http://docs.angularjs.org/api/ng.filter:date) and is localized.

##Bower Install

Run `bower install angular-ui-bootstrap-datetimepicker --save` to persist it to `bower.json`

Include the `ui.bootstrap.datetimepicker` module in your `app.js` file. You must be using the `ui.bootstrap` module as well.

###Usage Sample
~~~javascript
// Disable weekend selection
$scope.isDisabledDate = function(currentDate, mode) {
  return mode === 'day' && (currentDate.getDay() === 0 || currentDate.getDay() === 6);
};
~~~
~~~html
<datetimepicker ng-model="date" 
                date-format="dd-MMM-yyyy" 
                date-options="dateOptions" 
                date-disabled="isDisabledDate(date, mode)">
</datetimepicker>
~~~

### Datetimepicker Settings ###

 * `ng-model` <i class="icon-eye-open"></i>
 	:
 	The date and time object.

 * `min-date` <i class="icon-eye-open"></i>
 	_(Default: null)_ :
 	Defines the minimum available date.

 * `max-date` <i class="icon-eye-open"></i>
 	_(Default: null)_ :
 	Defines the maximum available date.

 * `date-disabled (date, mode)`
 	_(Default: null)_ :
 	An optional expression to disable visible options based on passing date and current mode _(day|month|year)_.

 * `day-format`
 	_(Default: 'dd')_ :
 	Format of day in month.

 * `month-format`
 	_(Default: 'MMMM')_ :
 	Format of month in year.

 * `year-format`
 	_(Default: 'yyyy')_ :
 	Format of year in year range.

 * `year-range`
 	_(Default: 20)_ :
 	Number of years displayed in year selection.

 * `day-header-format`
 	_(Default: 'EEE')_ :
 	Format of day in week header.

 * `day-title-format`
 	_(Default: 'MMMM yyyy')_ :
 	Format of title when selecting day.

 * `month-title-format`
 	_(Default: 'yyyy')_ :
 	Format of title when selecting month.

 * `date-format`
 	_(Default: 'yyyy-MM-dd')_ :
 	The format for displayed dates.

 * `date-options` attribute.
  	_(Default: {})_ :
   Options for datepicker in JSON format

 * `hour-step` <i class="icon-eye-open"></i>
 	_(Defaults: 1)_ :
 	 Number of hours to increase or decrease when using a button.

 * `minute-step` <i class="icon-eye-open"></i>
 	_(Defaults: 1)_ :
 	 Number of minutes to increase or decrease when using a button.

 * `show-meridian` <i class="icon-eye-open"></i>
 	_(Defaults: true)_ :
 	Whether to display 12H or 24H mode.

 * `meridians`
 	_(Defaults: ['AM', 'PM'])_ :
 	 Meridian labels

 * `readonly-time`
 	_(Defaults: false)_ :
 	 Whether a user can type inside the hours & minutes input.

* `readonly-date`
 	_(Defaults: false)_ :
 	 Whether a user can type inside the date input.

* `hidden-time`
 	_(Defaults: false)_ :
 	 Whether a user can see the hours & minutes input.

* `hidden-date`
	_(Defaults: false)_ :
 	 Whether a user can see the date input.

* `mousewheel`
 	_(Defaults: true)_ :
 	 Whether user can scroll inside the hours & minutes input to increase or decrease it's values.

* ` show-spinners`
 	_(Defaults: true)_ :
 	 Shows spinner arrows above and below the inputs.

* `current-text` 
 _(Default: 'Today')_ : 
 The text to display for the current day button.

* `clear-text`
 _(Default: 'Clear')_ : 
 The text to display for the clear button.

* `close-text`
 _(Default: 'Done')_ : 
 The text to display for the close popup button.
