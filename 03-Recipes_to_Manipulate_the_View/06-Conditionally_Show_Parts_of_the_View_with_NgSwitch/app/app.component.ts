import {Component, View} from 'angular2/core';

@Component({
  selector: 'my-app'
})
@View({
  template: `
    <button (click)="showBlue()">Show blue</button>
    <button (click)="showRed()">Show red</button>
    <button (click)="showDefault()">Show default</button>
    <div>Variante 1</div>
    <div [ngSwitch]="color">
      <p>What color are you?</p>
      <p *ngSwitchWhen="'blue'">I am blue</p>
      <p *ngSwitchWhen="'red'">I am red</p>
      <p *ngSwitchDefault>Color not known</p>
    </div>

    <div>Variante 2</div>
    <div [ngSwitch]="color">
      <p>What color are you?</p>
      <template [ngSwitchWhen]="'blue'"><p>I am blue</p></template>
      <template [ngSwitchWhen]="'red'"><p>I am red</p></template>
      <template ngSwitchDefault><p>Color not known</p></template>
    </div>
  `
})
class MyApp {
  color:string;

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

export default MyApp;
