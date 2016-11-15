import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="showBlue()">Show blue</button>
    <button (click)="showRed()">Show red</button>
    <button (click)="showDefault()">Show default</button>
    <div>Variante 1</div>
    <div [ngSwitch]="color">
      <p>What color are you?</p>
      <p *ngSwitchCase="'blue'">I am blue</p>
      <p *ngSwitchCase="'red'">I am red</p>
      <p *ngSwitchDefault>Color not known</p>
    </div>

    <div>Variante 2</div>
    <div [ngSwitch]="color">
      <p>What color are you?</p>
      <template [ngSwitchCase]="'blue'"><p>I am blue</p></template>
      <template [ngSwitchCase]="'red'"><p>I am red</p></template>
      <template ngSwitchDefault><p>Color not known</p></template>
    </div>
  `
})
export class AppComponent {
  color: string;

  constructor() {
    this.color = 'blue';
  }

  showBlue() {
    this.color = 'blue';
  }

  showRed() {
    this.color = 'red';
  }

  showDefault() {
    this.color = 'no_color';
  }
}
