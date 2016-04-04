import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
      <style>
      .ng-invalid {
        border-color: red;
      }

      .ng-valid {
        border-color: green;
      }
    </style>
    <form (ngSubmit)="onSubmit()" #form="ngForm" novalidate>
      <label>Username</label>
      <input type="text" [(ngModel)]="user.username" required ngControl="username"/>
      <label>Password</label>
      <input type="password" [(ngModel)]="user.password" required minlength="10" ngControl="password"/>
      <button type="submit" [disabled]="!form.valid">Submit</button>
    </form>
  `
})
class MyApp {
  user = {
    username: '',
    password: ''
  };
  constructor() {}

  onSubmit() {
    console.log(this.user);
  }
}

export default MyApp;
