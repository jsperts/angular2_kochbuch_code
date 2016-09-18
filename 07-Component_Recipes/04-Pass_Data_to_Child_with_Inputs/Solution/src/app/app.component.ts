import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Parent Data: {{parentData}}</p>
    <app-second [childData]="parentData"></app-second>
  `
})
export class AppComponent {
  parentData: string = 'Hello World!';
}
