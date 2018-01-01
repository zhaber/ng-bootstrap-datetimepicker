import {Component, Input, forwardRef} from '@angular/core';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface NgbDateTimeStruct extends NgbDateStruct, NgbTimeStruct {}

@Component({
  selector: 'ngbd-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgbDateTimePicker),
      multi: true
    }
  ]
})
export class NgbDateTimePicker implements ControlValueAccessor {
    title = 'datetimepicker';
    @Input() model: NgbDateTimeStruct;
    date: NgbDateStruct;
    time: NgbTimeStruct;

    /**
     * Date input placeholder.
     */
    @Input() datePlaceholder: String = "yyyy-mm-dd";

    /**
     * Number of months to display
     */
    @Input() displayMonths: number = 1;

    /**
     * First day of the week. With default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun
     */
    @Input() firstDayOfWeek: number;

    /**
     * Number of hours to increase or decrease when using a button.
     */
    @Input() hourStep: number;

    /**
     * Whether to display 12H or 24H mode.
     */
    @Input() meridian: boolean;

    /**
     * Number of minutes to increase or decrease when using a button.
     */
    @Input() minuteStep: number;

    /**
     * Navigation type: `select` (default with select boxes for month and year), `arrows`
     * (without select boxes, only navigation arrows) or `none` (no navigation at all)
     */
    @Input() navigation: 'select' | 'arrows' | 'none';

    /**
     * Whether to display days of the week
     */
    @Input() showWeekdays: boolean;

    /**
     * Whether to display week numbers
     */
    @Input() outsideDays: 'visible' | 'collapsed' | 'hidden';

    /**
     * Whether to display seconds input.
     */
    @Input() seconds: boolean;

    /**
     * Number of seconds to increase or decrease when using a button.
     */
    @Input() secondStep: number;

    /**
     * Whether to display week numbers
     */
    @Input() showWeekNumbers: boolean;

    /**
     * Whether to display the spinners above and below the inputs.
     */
    @Input() spinners: boolean;

    /**
     * To make timepicker readonly
     */
    @Input() timeReadonlyInputs: boolean;

    writeValue(newModel: NgbDateTimeStruct) {
        // Value is passed from outside via ngModel field
        this.setModel(newModel);
    }

    onChange = (newModel: NgbDateTimeStruct) => {};

    registerOnChange(fn) {
        this.onChange = fn;
    }

    registerOnTouched() {}

    private onDateChange(date: NgbDateStruct) {
        if (this.model == null) {
            let date = new Date();
            date.setHours(0,0,0,0);
            this.setModel(this.fromDate(date));
        }
        this.setModel({month: date.month, year: date.year, day: date.day, hour: this.model.hour, minute: this.model.minute, second: this.model.second});
    }

    private onTimeChange(date: NgbTimeStruct) {
        if (this.model == null) {
            this.setModel(this.fromDate(new Date()));
        }
        this.setModel({month: this.model.month, year: this.model.year, day: this.model.day, hour: date.hour, minute: date.minute, second:  date.second});
    }

    fromDate(date: Date): NgbDateTimeStruct {
        return (date && date.getFullYear) ? {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate(),
            hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()} : null;
    }

    private setModel(newModel: NgbDateTimeStruct) {
        this.model = newModel;
        if (this.model != null) {
            this.date = {month: this.model.month, year: this.model.year, day: this.model.day};
            this.time = {hour: this.model.hour, minute: this.model.minute, second: this.model.second};
        } else {
            this.date = null;
            this.time = null;
        }
        this.onChange(this.model);
    }

}
