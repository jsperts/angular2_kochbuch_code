import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `<h1>Product {{id}}</h1>`
})
export class ProductComponent {
  id: string;

  constructor(route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
  }
}
