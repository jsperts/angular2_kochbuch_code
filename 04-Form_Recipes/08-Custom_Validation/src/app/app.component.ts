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
    <form (ngSubmit)="onSubmit()" [formGroup]="myForm" novalidate>
      <label>Username
        <input type="text" formControlName="username"/>
      </label>
      <label>Password
        <input type="password" formControlName="password"/>
      </label>
      <button type="submit">Submit</button>
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
        Validators.minLength(10),
        function containsCapital(control: FormControl) {
          const reg = /[A-Z]/;
          if (reg.test(control.value)) {
            return null;
          } else {
            return {
              containsCapital: true
            };
          }
        }
      ]))
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
}
