import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <form (ngSubmit)="onSubmit(form)" #form="ngForm" novalidate>
      <label>Username</label>
      <input type="text" [(ngModel)]="user.username" required ngControl="username"/>
      <label>Password</label>
      <input type="password" [(ngModel)]="user.password" required minlength="10" ngControl="password"/>
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

  onSubmit(form) {
    if (form.valid) {
      console.log(this.user);
    }
  }
}

export default MyApp;
