import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form (ngSubmit)="onSubmit(form)" #form="ngForm" novalidate>
      <label>Username
        <input type="text" [(ngModel)]="user.username" required name="username" />
      </label>
      <label>Password
        <input type="password" [(ngModel)]="user.password"
          required minlength="10" name="password" />
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

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(this.user);
    }
  }
}
