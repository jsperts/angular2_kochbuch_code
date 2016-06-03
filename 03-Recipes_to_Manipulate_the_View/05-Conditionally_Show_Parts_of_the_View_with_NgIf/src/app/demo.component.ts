import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
    <div>Hello World!</div>
    <button (click)="toggleShowName()">Toggle show name</button>
    <div>Variante 1</div>
    <div *ngIf="showName">
      <p>My name is Max</p>
    </div>

    <div>Variante 2</div>
    <div template="ngIf showName">
      <p>My name is Max</p>
    </div>

    <div>Variante 3</div>
    <template [ngIf]="showName">
      <p>My name is Max</p>
    </template>
  `
})
export class DemoAppComponent {
  showName: boolean;

  constructor() {
    this.showName = true;
  }

  toggleShowName() {
    this.showName = !this.showName;
  }
}
