import {Component, View} from 'angular2/core';
import DataService from './data.service';

@Component({
  selector: 'my-app',
  providers: [DataService]
})
@View({
  template: '<div>Hello Data!</div>'
})
class MyApp {
  constructor(dataService: DataService) {
    console.log(dataService.getData());
  }
}

export default MyApp;
