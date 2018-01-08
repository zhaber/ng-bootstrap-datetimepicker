import {Component, NgModule, ViewChild} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateTimePicker, NgbDateTimeStruct } from './datetimepicker.component';

export {NgbDateTimeStruct} from './datetimepicker.component';

@Component({
  selector: 'my-app',
  template: `
  <form #demoForm="ngForm"> 
    <ngbd-datetimepicker #dtp [(ngModel)]="model" datePlaceholder="yyyy-mm-dd" name="datetime" [displayMonths]="displayMonths"></ngbd-datetimepicker>
      <hr/>
      <button class="btn btn-sm btn-outline-primary" (click)="selectToday()">Select Today</button> 
      <button class="btn btn-sm btn-outline-primary" (click)="addDisplayMonth()">Add display month</button>
      <hr/>
  </form>
    <pre>Model: {{ model || null | json }}</pre>
    <pre>Pristine: {{ demoForm.pristine }}</pre>`
})
export class App {

  model: NgbDateTimeStruct;
  displayMonths: number = 1;

  static fromDate(date): NgbDateTimeStruct {
     if (date) {
       return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate(), hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()};
     } else {
       return date;
     }
  }

  selectToday() {
    this.model = App.fromDate(new Date());
  }

  addDisplayMonth() {
    this.displayMonths++;
  }

}  

@NgModule({
  declarations: [App, NgbDateTimePicker],
  imports: [
    NgbModule.forRoot(), BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [App],
  exports: [NgbDateTimePicker]
})
export class NgbDateTimePickerModule { }
