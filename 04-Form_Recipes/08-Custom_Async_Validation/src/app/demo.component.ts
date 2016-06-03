import { Component } from '@angular/core';
import {
    FormBuilder,
    ControlGroup,
    Validators,
    Control
} from '@angular/common';

@Component({
  selector: 'demo-app',
  template: `
    <form (ngSubmit)="onSubmit()" [ngFormModel]="form" novalidate>
      <label>Username</label>
      <input type="text" ngControl="username"/>
      <label>Password</label>
      <input type="password" ngControl="password"/>
      <button type="submit">Submit</button>
    </form>
  `
})
export class DemoAppComponent {
  form: ControlGroup;

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      username: builder.control('', Validators.required,
          function usernameExists(control: Control) {
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
