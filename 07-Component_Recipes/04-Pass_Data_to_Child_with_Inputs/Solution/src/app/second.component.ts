import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  template: '<p>Child Data: {{childData}}</p>'
})
export class SecondComponent {
  @Input() childData: string;
}
