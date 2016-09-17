import { Component } from '@angular/core';

interface Dimensions {
  width: string;
  height: string;
}

@Component({
  selector: 'app-root',
  template: `
    <button type="button" (click)="showSmall()">Small</button>
    <button type="button" (click)="showBig()">Big</button>
    <div [ngStyle]="dimensions" style="background-color: red"></div>
  `
})
export class AppComponent {
  dimensions: Dimensions;
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
