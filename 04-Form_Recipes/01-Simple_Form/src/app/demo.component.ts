import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <form (ngSubmit)="onSubmit()">
      <label>Username</label>
      <input type="text" [(ngModel)]="user.username">
      <label>Password</label>
      <input type="password" [(ngModel)]="user.password">
      <button type="submit">Submit</button>
    </form>
  `
})
export class DemoAppComponent {
  user = {
    username: '',
    password: ''
  };

  constructor() {}
  onSubmit() {
    console.log(this.user);
  }
}
