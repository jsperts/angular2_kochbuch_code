import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form (ngSubmit)="onSubmit(form)" #form="ngForm" novalidate>
      <label>Username</label>
      <input type="text" [(ngModel)]="user.username" required name="username"/>
      <label>Password</label>
      <input type="password" [(ngModel)]="user.password"
          required minlength="10" name="password"/>
      <button type="submit">Submit</button>
    </form>
  `
})
export class AppComponent {
  user = {
    username: '',
    password: ''
  };

  onSubmit(form) {
    if (form.valid) {
      console.log(this.user);
    }
  }
}
