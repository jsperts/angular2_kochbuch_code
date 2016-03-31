import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <style>
      .box {
        width: 100px;
        height: 100px;
        border: 1px solid black;
      }
      .red {
        background-color: red;
      }
      .green {
        background-color: green;
      }
    </style>
    <div class="box" [ngClass]="{red: box.isRed}" (click)="toggleRed()"></div>
    <div class="box green" [ngClass]="{green: box.isGreen}" (click)="toggleGreen()"></div>
  `
})
class MyApp {
  box = {
    isRed: true,
    isGreen: false
  };

  constructor() {}

  toggleRed() {
    this.box.isRed = !this.box.isRed;
  }

  toggleGreen() {
    this.box.isGreen = !this.box.isGreen;
  }
}

export default MyApp;
