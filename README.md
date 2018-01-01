# NG Bootstrap - [Angular](http://angular.io/) Datetime picker component specific to [Bootstrap 4](https://getbootstrap.com/)

Welcome to the Angular version of the Datetimepicker Bootstrap library. It's using TypeScript and targeting the Bootstrap 4 CSS framework.  As with Bootstrap 4, this library is a work in progress.  The plugin is based on Angular [Datepicker](https://ng-bootstrap.github.io/#/components/datepicker/api) and [Timepicker](https://ng-bootstrap.github.io/#/components/timepicker/api).

Demo: [Plunker](http://plnkr.co/edit/FH9QBCHaloCqGz9Qrd85?p=preview)

## Install

Run `npm install npm install @zhaber/ng-bootstrap-datetimepicker` to install. Use the `--save` option to add it to your package.json's dependencies.

## Datetimepicker Settings 

 * `datePlaceholder`
 Date input placeholder.
 Type: String 

 * `displayMonths`
 Number of months to display
 Type: number

 * `firstDayOfWeek`
 First day of the week. With default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun
 Type: number

 * `hourStep`
 Number of hours to increase or decrease when using a button.
 Type: number

 * `meridian`
 Whether to display 12H or 24H mode.
 Type: boolean;

 * `minuteStep`
 Number of minutes to increase or decrease when using a button.
 Type: number

 * `navigation: 'select' | 'arrows' | 'none';`
 Navigation type: `select` (default with select boxes for month and year), `arrows`
 (without select boxes, only navigation arrows) or `none` (no navigation at all)
 
 * `showWeekdays: boolean;`
 Whether to display days of the week
 Type: boolean

 * `outsideDays: 'visible' | 'collapsed' | 'hidden';`
 Whether to display week numbers

 * `seconds`
 Whether to display seconds input.
 Type: boolean

 * `secondStep`
 Number of seconds to increase or decrease when using a button.
 Type: number

 * `showWeekNumbers`
 Whether to display week numbers
 Type: boolean

 * `spinners `
 Whether to display the spinners above and below the inputs.
 Type: boolean

 * `timeReadonlyInputs`
 To make timepicker readonly
 Type: boolean
