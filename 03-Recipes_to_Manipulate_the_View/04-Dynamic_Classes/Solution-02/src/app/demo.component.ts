import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  styles: [
    `.box {
        width: 100px;
        height: 100px;
        border: 1px solid black;
    }`,
    '.red { background-color: red; }'
  ],
  template: '<div [ngClass]="classes" (click)="toggleRed()"></div>'
})
export class DemoAppComponent {
  classes = {
    red: true,
    box: true
  };

  toggleRed() {
    this.classes.red = !this.classes.red;
  }
}
