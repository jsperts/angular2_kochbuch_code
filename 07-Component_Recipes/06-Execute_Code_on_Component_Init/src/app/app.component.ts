import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div>Hello World!</div>'
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('Initialization')
  }
}
