import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app/my_app.css'],
  template: `
    <div class="box"></div>
    <div class="box"></div>
    <div class="box box-blue"></div>
    <div class="box"></div>
  `
})
class MyApp {}

export default MyApp;
