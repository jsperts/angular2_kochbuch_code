import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form (ngSubmit)="onSubmit()">
      <label>Username</label>
      <input name="username" type="text" [(ngModel)]="user.username">
      <label>Password</label>
      <input name="password" type="password" [(ngModel)]="user.password">
      <button type="submit">Submit</button>
    </form>
  `
})
export class AppComponent {
  user = {
    username: '',
    password: ''
  };

  constructor() {}
  onSubmit() {
    console.log(this.user);
  }
}
