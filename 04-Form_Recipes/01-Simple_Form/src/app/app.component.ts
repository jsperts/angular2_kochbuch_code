import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form (ngSubmit)="onSubmit()">
      <label>Username
        <input name="username" type="text" [(ngModel)]="user.username">
      </label>
      <label>Password
        <input name="password" type="password" [(ngModel)]="user.password">
      </label>
      <button type="submit">Submit</button>
    </form>
  `
})
export class AppComponent {
  user = {
    username: '',
    password: ''
  };

  onSubmit() {
    console.log(this.user);
  }
}
