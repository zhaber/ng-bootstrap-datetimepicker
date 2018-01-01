# NG Bootstrap - [Angular](http://angular.io/) Datetime picker component specific to [Bootstrap 4](https://getbootstrap.com/)

Welcome to the Angular version of the Datetimepicker Bootstrap library. It's using TypeScript and targeting the Bootstrap 4 CSS framework.  As with Bootstrap 4, this library is a work in progress.  The plugin is based on Angular [Datepicker](https://ng-bootstrap.github.io/#/components/datepicker/api) and [Timepicker](https://ng-bootstrap.github.io/#/components/timepicker/api).

Demo: [Plunker](http://plnkr.co/edit/FH9QBCHaloCqGz9Qrd85?p=preview)

## Install

Run `npm install npm install @zhaber/ng-bootstrap-datetimepicker` to install. Use the `--save` option to add it to your package.json's dependencies.

## Datetimepicker Settings 

 * `datePlaceholder`
 Date input placeholder.
 _(Type: String)_ 

 * `displayMonths`
 Number of months to display
 _(Type: number)_

 * `firstDayOfWeek`
 First day of the week. With default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun
 _(Type: number)_

 * `hourStep`
 Number of hours to increase or decrease when using a button.
 _(Type: number)_

 * `meridian`
 Whether to display 12H or 24H mode.
 _(Type: boolean)_

 * `minuteStep`
 Number of minutes to increase or decrease when using a button.
 _(Type: number)_

 * `navigation`
 Navigation type: `select` (default with select boxes for month and year), `arrows`
 (without select boxes, only navigation arrows) or `none` (no navigation at all)
 _(Type: 'select' | 'arrows' | 'none'`)_
 
 * `showWeekdays: boolean;`
 Whether to display days of the week
 _(Type: boolean)_

 * `outsideDays`
 Whether to display week numbers
 _(Type: 'visible' | 'collapsed' | 'hidden')_

 * `seconds`
 Whether to display seconds input.
 _(Type: boolean)_

 * `secondStep`
 Number of seconds to increase or decrease when using a button.
 _(Type: number)_

 * `showWeekNumbers`
 Whether to display week numbers
 _(Type: boolean)_

 * `spinners `
 Whether to display the spinners above and below the inputs.
 _(Type: boolean)_

 * `timeReadonlyInputs`
 To make timepicker readonly
 _(Type: boolean)_
