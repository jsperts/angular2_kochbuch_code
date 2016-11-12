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
      <label formGroupName="passwords">Password
        <input type="password" formControlName="password"/>
      </label>
      <label formGroupName="passwords">Repeat Password
        <input type="password" formControlName="passwordRepeat"/>
      </label>
      <div *ngIf="myForm.controls.passwords.hasError('passwordsNotEqual')">
        Passwords are not equal
      </div>
      <button type="submit">Submit</button>
    </form>
  `
})
export class AppComponent {
  myForm: FormGroup;

  constructor(builder: FormBuilder) {
    this.myForm = builder.group({
      username: builder.control('', Validators.required),
      passwords: builder.group({
        password: builder.control('', Validators.compose([
          Validators.required,
          Validators.minLength(10)
        ])),
        passwordRepeat: builder.control('')
      }, {
        validator(group: FormGroup) {
          console.log(group);
          if (group.value.password !== group.value.passwordRepeat) {
            return {
              passwordsNotEqual: true
            };
          }
          return null;
        }
      })
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
}
