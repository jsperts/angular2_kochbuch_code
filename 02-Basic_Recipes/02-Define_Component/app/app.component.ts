import {Component, View} from 'angular2/core';

import MyComponent from './second.component';

@Component({
  selector: 'my-app'
})
@View({
  template: '<div>Hello World!</div><my-component></my-component>',
  directives: [MyComponent]
})
class MyApp {}

export default MyApp;
