import {Component, View} from 'angular2/core';

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
    <form (ngSubmit)="onSubmit()" novalidate>
      <label>Username</label>
      <input type="text" [(ngModel)]="user.username" required/>
      <label>Password</label>
      <input type="password"  [(ngModel)]="user.password" required minlength="10"/>
      <button type="submit">Submit</button>
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
