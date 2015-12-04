import {bootstrap, Component, View} from 'angular2/angular2';
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
