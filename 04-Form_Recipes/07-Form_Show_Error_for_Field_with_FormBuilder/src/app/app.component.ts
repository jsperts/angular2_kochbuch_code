import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="myForm" novalidate>
      <label>Username
        <input type="text" formControlName="username"/>
      </label>
      <div *ngIf="!myForm.controls.username.valid">
        This field is required!
      </div>
      <label>Password
        <input type="password" formControlName="password"/>
      </label>
      <div *ngIf="myForm.controls.password.errors?.required">
        This field is required!
      </div>
      <div *ngIf="myForm.controls.password.errors?.minlength">
        This field must have at least 10 characters
      </div>      
      <button type="submit" [disabled]="!myForm.valid">Submit</button>
    </form>
  `
})
export class AppComponent {
  myForm: FormGroup;

  constructor(builder: FormBuilder) {
    this.myForm = builder.group({
      username: builder.control('', Validators.required),
      password: builder.control('', Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ]))
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
