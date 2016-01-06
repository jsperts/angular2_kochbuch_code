import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'my-app'
})
@View({
  template: `
    <div>Variante 1 mit (EventName)</div>
    <div (click)="clicked()">Click me</div>
    <div>Variante 2 mit on-EventName</div>
    <div on-click="clicked()">Click me</div>
  `
})
class MyApp {
  clicked() {
    console.log('Clicked');
  }
}

bootstrap(MyApp);
