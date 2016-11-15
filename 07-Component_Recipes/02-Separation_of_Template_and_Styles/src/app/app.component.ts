import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [
    '.box { width: 100px; height: 100px; background-color: red; margin: 10px }',
    '.box-blue { background-color: blue; }'
  ],
  template: `
    <div class="box"></div>
    <div class="box"></div>
    <div class="box box-blue"></div>
    <div class="box"></div>
  `
})
export class AppComponent {}
