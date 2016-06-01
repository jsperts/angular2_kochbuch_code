import { Component } from '@angular/core';
import { SecondComponent } from './second.component';

@Component({
  selector: 'demo-app',
  template: `
    <h1>Parent</h1>
    <p>Parent Data: {{parentData}}</p>
    <app-second (dataChange)="onDataChange($event)"></app-second>
  `,
  directives: [SecondComponent]
})
export class DemoAppComponent {
  parentData: string = 'Initial Data';

  onDataChange(data) {
    this.parentData = data;
  }
}
