<h2>Angular UI<br>Bootstrap Date Time Picker</h2>

The plugin is based on AngularUI [Datepicker](https://github.com/angular-ui/bootstrap/tree/master/src/datepicker) and [Timepicker](https://github.com/angular-ui/bootstrap/tree/master/src/timepicker).

Demo: [Plunker](http://plnkr.co/edit/qRhNlfTWlt9wIexa3WbB?p=preview)

Date is formatted using the [date filter](http://docs.angularjs.org/api/ng.filter:date) and is localized.

## Install

### NPM
Run `npm install angular-ui-bootstrap-datetimepicker` to install. Use the `--save` option to add it to your package.json's dependencies.

If you're using browserify, you can simply `require('angular-ui-bootstrap-datetimepicker')` to make it available in your angular project. Ensure that your angular module depends on `ui.bootstrap.datetimepicker`. You must be using the `ui.bootstrap` module as well - also availbe via npm.

Also include the stylesheet `datetimepicker.css` in your html. Note that this is the same stylesheet that the package.json's `style` declaration has.

### Bower

Run `bower install angular-ui-bootstrap-datetimepicker --save` to persist it to `bower.json`

Include the `ui.bootstrap.datetimepicker` module in your `app.js` file. You must be using the `ui.bootstrap` module as well.

### NuGet

See https://www.nuget.org/packages/Angular-js-bootstrap-datetimepicker/

## Usage Sample
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

## Datetimepicker Settings 

 * `clear-text`
 _(Default: 'Clear')_ : 
 The text to display for the clear button.

 * `close-text`
 _(Default: 'Done')_ : 
 The text to display for the close popup button.

 * `current-text` 
 _(Default: 'Today')_ : 
 The text to display for the current day button.

 * `datepicker-append-to-body`
 	_(Default: false)_ :
 	Append the datepicker popup element to body, rather than inserting after datepicker-popup.

 * `datepicker-popup-template-url`
  _(Default: uib/template/datepickerPopup/popup.html)_ :
  Add the ability to override the template used on the component.

 * `datepicker-template-url`
  _(Default: uib/template/datepicker/datepicker.html)_ :
  Add the ability to override the template used on the component (inner uib-datepicker).

 * `date-disabled (date, mode)`
 	_(Default: null)_ :
 	An optional expression to disable visible options based on passing date and current mode _(day|month|year)_.

 * `date-format`
 	_(Default: 'yyyy-MM-dd')_ :
 	The format for displayed dates.

 * `date-ng-click`
 	_(Default: null)_ :
 	A function called when a date input is clicked.

 * `date-opened`
        _(Default: false)_ :
        Whether or not to show the datepicker.

 * `date-options` attribute.
  	_(Default: {})_ :
   Options for datepicker in JSON format. E.g. minDate and maxDate, which define the minimum and maximum available date and time.

 * `day-format`
 	_(Default: 'dd')_ :
 	Format of day in month.

 * `day-header-format`
 	_(Default: 'EEE')_ :
 	Format of day in week header.

 * `day-title-format`
 	_(Default: 'MMMM yyyy')_ :
 	Format of title when selecting day.

 * `disabled-date`
 	_(Defaults: false)_ :
 	 Whether the date input is disabled.

 * `hidden-date`
	_(Defaults: false)_ :
 	 Whether a user can see the date input.

 * `hidden-time`
 	_(Defaults: false)_ :
 	 Whether a user can see the hours & minutes input.

 * `hour-step` <i class="icon-eye-open"></i>
 	_(Defaults: 1)_ :
 	 Number of hours to increase or decrease when using a button.

 * `max-time`
        _(Defaults: ['12:59 PM'])_ :
        Maximum time for time picker (Date).

 * `meridians`
 	_(Defaults: ['AM', 'PM'])_ :
 	 Meridian labels

 * `min-time`
        _(Defaults: ['0:00 AM'])_ :
        Minumum time for time picker (Date).

 * `minute-step` <i class="icon-eye-open"></i>
 	_(Defaults: 1)_ :
 	 Number of minutes to increase or decrease when using a button.

 * `month-format`
 	_(Default: 'MMMM')_ :
 	Format of month in year.

 * `month-title-format`
 	_(Default: 'yyyy')_ :
 	Format of title when selecting month.

 * `mousewheel`
 	_(Defaults: true)_ :
 	 Whether user can scroll inside the hours & minutes input to increase or decrease it's values.

 * `ng-model` 
 	:
 	The date and time object.

 * `readonly-date`
 	_(Defaults: false)_ :
 	 Whether a user can type inside the date input.

 * `readonly-time`
 	_(Defaults: false)_ :
 	 Whether a user can type inside the hours & minutes input.

 * `required`
 	_(Defaults: false)_ :
 	 Whether a non-empty value is required.

 * `show-button-bar`
 	_(Defaults: true)_ :
 	 Whether or not to display a button bar underneath the uib-datepicker..

 * `show-meridian` <i class="icon-eye-open"></i>
 	_(Defaults: true)_ :
 	Whether to display 12H or 24H mode.

 * `show-spinners`
 	_(Defaults: true)_ :
 	 Shows spinner arrows above and below the inputs.
 
 * `timepicker-template-url`
  _(Defaults: uib/template/timepicker/timepicker.html)_ :
   Add the ability to override the template used on the component.

 * `year-format`
 	_(Default: 'yyyy')_ :
 	Format of year in year range.

 * `year-range`
 	_(Default: 20)_ :
 	Number of years displayed in year selection.
