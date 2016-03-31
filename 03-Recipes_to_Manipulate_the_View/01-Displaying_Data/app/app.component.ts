import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div>Hello World!</div>
    <div>My name is {{name}}</div>
    <div>My last name is {{user.name}}</div>
  `
})
class MyApp {
  name: string;
  user = {
    name: 'Mick'
  };

  constructor() {
    this.name = 'Max';
  }
}

export default MyApp;
