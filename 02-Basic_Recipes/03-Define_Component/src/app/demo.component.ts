import { Component } from '@angular/core';

import { SecondComponent } from './second.component';

@Component({
  selector: 'demo-app',
  template: '<div>Hello World!</div><app-second></app-second>',
  directives: [SecondComponent]
})
export class DemoAppComponent {}
