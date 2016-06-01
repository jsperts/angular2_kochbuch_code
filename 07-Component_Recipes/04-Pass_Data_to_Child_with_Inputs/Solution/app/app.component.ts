import {Component} from 'angular2/core';
import ChildComponent from './child.component';

@Component({
  selector: 'my-app',
  template: `
    <p>Parent Data: {{parentData}}</p>
    <child-component [childData]="parentData"></child-component>
  `,
  directives: [ChildComponent]
})
class MyApp {
  parentData: string = 'Hello World!';
}

export default MyApp;
