import {bootstrap, Component, View} from 'angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
  template: '<div>Hello World!</div>'
})
class MyApp {

}

bootstrap(MyApp);
