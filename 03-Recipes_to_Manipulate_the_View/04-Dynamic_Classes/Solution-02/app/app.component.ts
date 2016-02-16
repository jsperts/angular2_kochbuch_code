import {Component, View} from 'angular2/core';

@Component({
  selector: 'my-app'
})
@View({
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
    </style>
    <div [ngClass]="classes" (click)="toggleRed()"></div>
  `
})
class MyApp {
  classes = {
    red: true,
    box: true
  };
  constructor() {}

  toggleRed() {
    this.classes.red = !this.classes.red;
  }
}

export default MyApp;
