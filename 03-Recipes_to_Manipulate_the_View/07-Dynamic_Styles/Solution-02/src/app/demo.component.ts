import { Component } from '@angular/core';

interface IDimensions {
  width: string;
  height: string
}

@Component({
  selector: 'demo-app',
  template: `
    <button type="button" (click)="showSmall()">Small</button>
    <button type="button" (click)="showBig()">Big</button>
    <div [ngStyle]="dimensions" style="background-color: red"></div>
  `
})
export class DemoAppComponent {
  dimensions: IDimensions;
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
