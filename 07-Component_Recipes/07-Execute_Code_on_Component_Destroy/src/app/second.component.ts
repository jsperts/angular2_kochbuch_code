import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-second',
  template: '<div>My Name is ...</div>'
})
export class SecondComponent implements OnDestroy {
  ngOnDestroy() {
    console.log('Destroy');
  }
}
