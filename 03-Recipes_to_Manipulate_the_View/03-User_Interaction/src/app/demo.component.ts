import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <div>Variante 1 mit (EventName)</div>
    <div (click)="clicked()">Click me</div>
    <div>Variante 2 mit on-EventName</div>
    <div on-click="clicked()">Click me</div>
  `
})
export class DemoAppComponent {
  clicked() {
    console.log('Clicked');
  }
}
