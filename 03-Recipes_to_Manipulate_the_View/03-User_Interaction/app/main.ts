import {bootstrap, Component, View} from 'angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
  template: '<div (click)="clicked()">Click me</div>'
})
class MyApp {
  clicked () {
    console.log('Clicked');
  }
}

bootstrap(MyApp);
