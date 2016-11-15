import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>Variante 1 mit (EventName)</div>
    <div (click)="clicked()">Click me</div>
    <div>Variante 2 mit on-EventName</div>
    <div on-click="clicked()">Click me</div>
  `
})
export class AppComponent {
  clicked() {
    console.log('Clicked');
  }
}
