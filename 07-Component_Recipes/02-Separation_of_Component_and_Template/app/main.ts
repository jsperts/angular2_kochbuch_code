import {bootstrap, Component, View} from 'angular2/angular2';

@Component({
  selector: 'my-app',
})
@View({
  templateUrl: './app/my_app.html'
})
class MyApp {}

bootstrap(MyApp);
