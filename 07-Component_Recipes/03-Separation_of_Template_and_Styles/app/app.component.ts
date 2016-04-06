import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  styles: ['.box {width: 100px; height: 100px; background-color: red; margin: 10px}', '.box-blue {background-color: blue;}'],
  template: `
    <div class="box"></div>
    <div class="box"></div>
    <div class="box box-blue"></div>
    <div class="box"></div>
  `
})
class MyApp {}

export default MyApp;
