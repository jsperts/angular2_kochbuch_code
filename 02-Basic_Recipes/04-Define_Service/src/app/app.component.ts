import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  providers: [ DataService ],
  template: '<div>Hello World!</div>'
})
export class AppComponent {
  constructor(dataService: DataService) {
    console.log(dataService.getData());
  }
}
