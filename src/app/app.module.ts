import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateTimePicker, NgbDateTimeStruct } from './datetimepicker.component';
import { FormGroup, FormControl } from '@angular/forms';

export {NgbDateTimeStruct} from './datetimepicker.component';

@Component({
  selector: 'my-app',
  template: `
  <form [formGroup]="demo"> 
    <ngbd-datetimepicker #dtp [(ngModel)]="model" datePlaceholder="yyyy-mm-dd" formControlName="datetime" 
                         [displayMonths]="displayMonths"></ngbd-datetimepicker>
      <hr/> 
      <button class="btn btn-sm btn-outline-primary" (click)="selectToday()">Select Today</button> 
      <button class="btn btn-sm btn-outline-primary" (click)="addDisplayMonth()">Add display month</button>
      <hr/> 
    <pre>Model: {{ model | json }}</pre>
  </form>`
})
export class App {

  demo: FormGroup;
  model: NgbDateTimeStruct;
  displayMonths: number = 1;

  fromDate(date): NgbDateTimeStruct {
     if (date) {
       return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate(), hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()};
     } else {
       return date;
     }
  } 

  selectToday() {
    this.model = this.fromDate(new Date());
  }

  addDisplayMonth() {
    this.displayMonths++;
  }

  ngOnInit() {
    this.demo = new FormGroup({
      datetime: new FormControl()
    });
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
