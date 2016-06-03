import { Component } from '@angular/core';
import { SecondComponent } from './second.component';

@Component({
  selector: 'demo-app',
  template: `
    <p>Parent Data: {{parentData}}</p>
    <app-second [childData]="parentData"></app-second>
  `,
  directives: [SecondComponent]
})
export class DemoAppComponent {
  parentData: string = 'Hello World!';
}
