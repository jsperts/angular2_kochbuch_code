import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  styles: [
    `.box {
        width: 100px;
        height: 100px;
        border: 1px solid black;
    }`,
    '.red { background-color: red; }',
    '.green { background-color: green; }'
  ],
  template: `
    <div class="box" [ngClass]="{red: box.isRed}" (click)="toggleRed()"></div>
    <div class="box green" [ngClass]="{green: box.isGreen}" (click)="toggleGreen()"></div>
  `
})
export class DemoAppComponent {
  box = {
    isRed: true,
    isGreen: false
  };

  toggleRed() {
    this.box.isRed = !this.box.isRed;
  }

  toggleGreen() {
    this.box.isGreen = !this.box.isGreen;
  }
}
