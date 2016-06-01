import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'demo-app',
  styleUrls: ['demo.component.css'],
  template: `
    <div class="box"></div>
    <div class="box"></div>
    <div class="box box-blue"></div>
    <div class="box"></div>
  `
})
export class DemoAppComponent {}
