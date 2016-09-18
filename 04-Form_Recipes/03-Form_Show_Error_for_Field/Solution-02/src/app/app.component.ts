import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form (ngSubmit)="onSubmit()" #form="ngForm" novalidate>
      <label>Username</label>
      <input type="text" [(ngModel)]="user.username"
          required name="username" #username="ngModel"/>
      <div *ngIf="!username.valid">
        This field is required!
      </div>
      <label>Password</label>
      <input type="password" [(ngModel)]="user.password"
          required minlength="10" name="password" #password="ngModel"/>
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
export class AppComponent {
  user = {
    username: '',
    password: ''
  };

  onSubmit() {
    console.log(this.user);
  }
}