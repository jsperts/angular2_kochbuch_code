import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Parent</h1>
    <p>Parent Data: {{parentData}}</p>
    <app-second (dataChange)="onDataChange($event)"></app-second>
  `
})
export class AppComponent {
  parentData: string = 'Initial Data';

  onDataChange(data) {
    this.parentData = data;
  }
}
