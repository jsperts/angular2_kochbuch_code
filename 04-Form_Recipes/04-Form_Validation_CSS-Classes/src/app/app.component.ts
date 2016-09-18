import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [
    '.ng-invalid { border-color: red; }',
    '.ng-valid { border-color: green; }'
  ],
  template: `
    <form (ngSubmit)="onSubmit()" #form="ngForm" novalidate>
      <label>Username</label>
      <input type="text" [(ngModel)]="user.username" required name="username"/>
      <label>Password</label>
      <input type="password" [(ngModel)]="user.password"
          required minlength="10" name="password"/>
      <button type="submit" [disabled]="!form.valid">Submit</button>
    </form>`
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
