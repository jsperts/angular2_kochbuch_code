import {Component, Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';

@Component({
  selector: 'child-component',
  template: `
    <h1>Child</h1>
    <button (click)="sendData()">Send data to Parent</button>
  `
})
class ChildComponent {
  @Output() dataChange = new EventEmitter();

  sendData() {
    this.dataChange.emit('Child Data');
  }
}

export default ChildComponent;
