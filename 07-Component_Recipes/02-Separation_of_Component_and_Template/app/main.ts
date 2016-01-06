import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'my-app'
})
@View({
  templateUrl: './app/my_app.html'
})
class MyApp {}

bootstrap(MyApp);
