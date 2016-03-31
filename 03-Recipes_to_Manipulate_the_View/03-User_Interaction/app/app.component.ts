import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
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

export default MyApp;
