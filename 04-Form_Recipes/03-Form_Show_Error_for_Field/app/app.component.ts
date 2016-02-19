import {Component, View} from 'angular2/core';

@Component({
  selector: 'my-app'
})
@View({
  template: `
    <form (ngSubmit)="onSubmit()" novalidate>
      <div>
        <label>Username</label>
        <input type="text" [(ngModel)]="user.username" required #username="ngForm"/>
        <div *ngIf="!username.valid">
          This field is required!
        </div>
      </div>
      <div>
        <label>Password</label>
        <input type="password"  [(ngModel)]="user.password" required minlength="10" #password="ngForm"/>
        <div *ngIf="password.errors?.required">
          This field is required!
        </div>
        <div *ngIf="password.errors?.minlength">
          This field must have at least 10 characters
        </div>
      </div>
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
