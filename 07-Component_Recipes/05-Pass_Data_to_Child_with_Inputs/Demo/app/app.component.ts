import {Component} from 'angular2/core';
import ChildComponent from './child.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>Parent</h1>
    <p>Parent Primitive Data: {{parentPrimitive}}</p>
    <p>Parent Object Data: {{parentObject.name}}</p>
    <button (click)="changePrimitive()">Change Primitive</button>
    <button (click)="changeObjectRef()">Change Object Reference</button>
    <button (click)="changeObjectProp()">Change Object name Property</button>
    <child-component [childPrimitive]="parentPrimitive" [childObject]="parentObject"></child-component>
  `,
  directives: [ChildComponent]
})
class MyApp {
  parentPrimitive: string = 'Hello World!';
  parentObject = {name: 'Max'};

  changePrimitive() {
    this.parentPrimitive = 'New Primitive Data Parent';
  }

  changeObjectRef() {
    this.parentObject = {name: 'New Parent Ref Name'};
  }

  changeObjectProp() {
    this.parentObject.name = 'New Parent prop Name';
  }
}

export default MyApp;
