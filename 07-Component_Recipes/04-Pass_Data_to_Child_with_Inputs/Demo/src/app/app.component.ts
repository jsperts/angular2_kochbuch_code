import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Parent</h1>
    <p>Parent Primitive Data: {{parentPrimitive}}</p>
    <p>Parent Object Data: {{parentObject.name}}</p>
    <button (click)="changePrimitive()">Change Primitive</button>
    <button (click)="changeObjectRef()">Change Object Reference</button>
    <button (click)="changeObjectProp()">Change Object name Property</button>
    <app-second [childPrimitive]="parentPrimitive" [childObject]="parentObject"></app-second>
  `
})
export class AppComponent {
  parentPrimitive: string = 'Hello World!';
  parentObject = { name: 'Max' };

  changePrimitive() {
    this.parentPrimitive = 'New Primitive Data Parent';
  }

  changeObjectRef() {
    this.parentObject = { name: 'New Parent Ref Name' };
  }

  changeObjectProp() {
    this.parentObject.name = 'New Parent prop Name';
  }
}
