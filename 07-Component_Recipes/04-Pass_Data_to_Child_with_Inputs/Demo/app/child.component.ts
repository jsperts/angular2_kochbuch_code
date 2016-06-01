import {Component, Input} from 'angular2/core';

@Component({
  selector: 'child-component',
  template: `
    <h1>Child</h1>
    <p>Child Primitive Data: {{childPrimitive}}</p>
    <p>Child Object Data: {{childObject.name}}</p>
    <button (click)="changePrimitive()">Change Primitive</button>
    <button (click)="changeObjectRef()">Change Object Reference</button>
    <button (click)="changeObjectProp()">Change Object name Property</button>
  `
})
class ChildComponent {
  @Input() childPrimitive: string;
  @Input() childObject: {name: string};

  changePrimitive() {
    this.childPrimitive = 'New Primitive Data Child';
  }

  changeObjectRef() {
    this.childObject = {name: 'New Child Ref Name'};
  }

  changeObjectProp() {
    this.childObject.name = 'New Child prop Name';
  }
}

export default ChildComponent;
