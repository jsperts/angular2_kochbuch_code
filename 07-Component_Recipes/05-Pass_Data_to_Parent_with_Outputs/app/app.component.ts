import {Component} from 'angular2/core';

import ChildComponent from './child.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>Parent</h1>
    <p>Parent Data: {{parentData}}</p>
    <child-component (dataChange)="onDataChange($event)"></child-component>
  `,
  directives: [ChildComponent]
})
class MyApp {
  parentData: string = 'Initial Data';
  
  onDataChange(data) {
    this.parentData = data;
  }
}

export default MyApp;
