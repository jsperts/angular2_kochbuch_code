import {Component, Input} from 'angular2/core';

@Component({
  selector: 'child-component',
  template: '<p>Child Data: {{childData}}</p>'
})
class ChildComponent {
  @Input() childData: string;
}

export default ChildComponent;
