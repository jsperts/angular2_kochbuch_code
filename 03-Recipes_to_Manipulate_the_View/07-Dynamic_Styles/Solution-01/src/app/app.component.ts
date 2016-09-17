import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button type="button" (click)="showSmall()">Small</button>
    <button type="button" (click)="showBig()">Big</button>
    <div [ngStyle]="{'width': elemWidth, 'height': elemHeight}" style="background-color: red"></div>
  `
})
export class AppComponent {
  elemWidth: string;
  elemHeight: string;
  constructor() {
    this.elemWidth = '100px';
    this.elemHeight = '100px';
  }

  showSmall() {
    this.elemWidth = '100px';
    this.elemHeight = '100px';
  }

  showBig() {
    this.elemWidth = '300px';
    this.elemHeight = '300px';
  }
}
