import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import MyComponent from './component';

@Component({
  selector: 'my-app'
})
@View({
  template: '<div>Hello World!</div><my-component></my-component>',
  directives: [MyComponent]
})
class MyApp {}

bootstrap(MyApp);
