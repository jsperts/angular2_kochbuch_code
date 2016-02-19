import {Component, View} from 'angular2/core';

@Component({
  selector: 'my-app'
})
@View({
  template: `
    <div>Hello World!</div>
    <button (click)="toggleShowName()">Toggle show name</button>
    <div>Variante 1</div>
    <div *ngIf="showName">
      <p>My name is {{name}}</p>
    </div>

    <div>Variante 2</div>
    <div template="ngIf showName">
      <p>My name is {{name}}</p>
    </div>

    <div>Variante 3</div>
    <template [ngIf]="showName">
      <p>My name is {{name}}</p>
    </template>
  `
})
class MyApp {
  name: string;
  showName: boolean;

  constructor() {
    this.showName = true;
    this.name = 'Max';
  }

  toggleShowName() {
    this.showName = !this.showName;
  }
}

export default MyApp;
