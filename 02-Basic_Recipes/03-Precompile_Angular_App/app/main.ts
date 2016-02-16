///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'my-app'
})
@View({
  template: '<div>Hello World!</div>'
})
class MyApp {

}

bootstrap(MyApp);
