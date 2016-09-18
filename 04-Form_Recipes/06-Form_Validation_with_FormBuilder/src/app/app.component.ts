import { Component } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
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
      username: builder.control('', Validators.required),
      password: builder.control('', Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ]))
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
