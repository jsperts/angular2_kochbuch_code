import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <h1>Child</h1>
    <p>Child Primitive Data: {{childPrimitive}}</p>
    <p>Child Object Data: {{childObject.name}}</p>
    <p>Damit "Change Object name Property" funktioniert muss der
      Button vor dem "Change Object Reference" geklickt werden.</p>
    <p>Wenn "Change Object Reference" als erstes geklickt wird,
      dann haben die Objekt im Parent und Child nicht mehr die gleiche Referenz
      und die Änderung von "Change Object name Property" wird im Parent nicht angezeigt.</p>
    <button (click)="changePrimitive()">Change Primitive</button>
    <button (click)="changeObjectRef()">Change Object Reference</button>
    <button (click)="changeObjectProp()">Change Object name Property</button>
  `
})
export class SecondComponent {
  @Input() childPrimitive: string;
  @Input() childObject: { name: string };

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
