import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
    FormControl
} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="form" novalidate>
      <label>Username</label>
      <input type="text" formControlName="username"/>
      <label>Password</label>
      <input type="password" formControlName="password"/>
      <button type="submit">Submit</button>
    </form>
  `
})
export class AppComponent {
  form: FormGroup;

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      username: builder.control('', Validators.required,
          function usernameExists(control: FormControl) {
            return new Promise((resolve) => {
              setTimeout(() => {
                if (control.value === 'Max') {
                  resolve({
                    usernameExists: true
                  });
                } else {
                  resolve(null);
                }
              }, 1000);
            });
          }),
      password: builder.control('',
          Validators.compose([Validators.required, Validators.minLength(10)]))
    });
  }

  onSubmit() {
    if (!this.form.pending && this.form.valid) {
      console.log(this.form.value);
    }
  }
}
