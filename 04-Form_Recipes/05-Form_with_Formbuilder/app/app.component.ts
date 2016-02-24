import {Component, View} from 'angular2/core';
import {Control} from 'angular2/common';
import {Validators} from 'angular2/common';

@Component({
  selector: 'my-app'
})
@View({
  template: `
      <style>
      .ng-invalid {
        border-color: red;
      }

      .ng-valid {
        border-color: green;
      }
    </style>
    <form (ngSubmit)="onSubmit(form)" #form="ngForm" novalidate>
      <label>Username</label>
      <!--input type="text" [(ngModel)]="user.username" [ngFormControl]="username"/-->
      <input type="text" [ngFormControl]="username"/>
      <label>Password</label>
      <input type="password" [ngFormControl]="password"/>
      <button type="submit">Submit</button>
    </form>
  `
})
class MyApp {
  username = new Control('', Validators.required);
  password = new Control('', Validators.required);
  constructor() {}

  onSubmit(form) {
    console.log(form)
    console.log(this.username)
  }
}

export default MyApp;
