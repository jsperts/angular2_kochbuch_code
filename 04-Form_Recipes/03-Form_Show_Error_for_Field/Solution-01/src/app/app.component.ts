import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form (ngSubmit)="onSubmit()" #form="ngForm" novalidate>
      <label>Username
        <input type="text" [(ngModel)]="user.username" required name="username"/>
      </label>
      <div *ngIf="form.controls.username?.invalid">
        This field is required!
      </div>
      <label>Password
        <input type="password" [(ngModel)]="user.password"
          required minlength="10" name="password"/>
      </label>
      <div *ngIf="form.controls.password?.errors?.required">
        This field is required!
      </div>
      <div *ngIf="form.controls.password?.errors?.minlength">
        This field must have at least 10 characters
      </div>
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
