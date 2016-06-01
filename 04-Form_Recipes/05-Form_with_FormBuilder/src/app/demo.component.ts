import { Component } from '@angular/core';
import { FormBuilder, ControlGroup } from '@angular/common';

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
      username: builder.control(''),
      password: builder.control('')
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
