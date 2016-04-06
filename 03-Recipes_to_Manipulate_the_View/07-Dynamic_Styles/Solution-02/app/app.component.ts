import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <button type="button" (click)="showSmall()">Small</button>
    <button type="button" (click)="showBig()">Big</button>
    <div [ngStyle]="dimensions" style="background-color: red"></div>
  `
})
class MyApp {
  dimensions: {width: string; height: string};
  constructor() {
    this.dimensions = {
      width: '100px',
      height: '100px'
    };
  }

  showSmall() {
    this.dimensions = {
      width: '100px',
      height: '100px'
    };
  }

  showBig() {
    this.dimensions = {
      width: '300px',
      height: '300px'
    };
  }
}

export default MyApp;
