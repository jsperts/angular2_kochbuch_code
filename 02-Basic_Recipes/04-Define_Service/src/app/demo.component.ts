import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'demo-app',
  providers: [DataService],
  template: '<div>Hello World!</div>'
})
export class DemoAppComponent {
  constructor(dataService: DataService) {
    console.log(dataService.getData());
  }
}
