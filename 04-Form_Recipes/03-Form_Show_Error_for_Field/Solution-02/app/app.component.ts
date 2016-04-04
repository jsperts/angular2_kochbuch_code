import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <form (ngSubmit)="onSubmit()" #form="ngForm" novalidate>
      <label>Username</label>
      <input type="text" [(ngModel)]="user.username" required ngControl="username" #username="ngForm"/>
      <div *ngIf="!username.valid">
        This field is required!
      </div>
      <label>Password</label>
      <input type="password" [(ngModel)]="user.password" required minlength="10" ngControl="password" #password="ngForm"/>
      <div *ngIf="password?.errors?.required">
        This field is required!
      </div>
      <div *ngIf="password.errors?.minlength">
        This field must have at least 10 characters
      </div>
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
