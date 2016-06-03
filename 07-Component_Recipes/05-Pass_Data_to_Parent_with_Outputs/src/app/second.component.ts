import {
    Component,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <h1>Child</h1>
    <button (click)="sendData()">Send data to Parent</button>
  `
})
export class SecondComponent {
  @Output() dataChange = new EventEmitter();

  sendData() {
    this.dataChange.emit('Child Data');
  }
}
