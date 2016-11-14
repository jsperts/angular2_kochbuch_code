import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form (ngSubmit)="onSubmit()" #form="ngForm" novalidate>
      <label>Username
        <input type="text" [(ngModel)]="user.username" required name="username"/>
      </label>
      <label>Password
        <input type="password" [(ngModel)]="user.password"
          required minlength="10" name="password"/>
      </label>
      <button type="submit" [disabled]="form.invalid">Submit</button>
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
