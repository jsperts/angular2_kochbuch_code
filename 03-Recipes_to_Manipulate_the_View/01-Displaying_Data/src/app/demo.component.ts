import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <div>Hello World!</div>
    <div>My name is {{name}}</div>
    <div>My last name is {{lastname}}</div>
  `
})
export class DemoAppComponent {
  name: string;
  lastname = 'Mustermann';

  constructor() {
    this.name = 'Max';
  }
}
