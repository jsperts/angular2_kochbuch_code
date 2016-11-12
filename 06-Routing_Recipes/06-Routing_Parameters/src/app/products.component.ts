import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Products</h1>
    <ul>
      <li *ngFor="let prod of products">
        <a [routerLink]="prod.id">{{prod.name}}</a>
      </li>
    </ul>
  `
})
export class ProductsComponent {
  products = [{
    id: 1,
    name: 'Product 1'
  }, {
    id: 2,
    name: 'Product 2'
  }, {
    id: 3,
    name: 'Product 3'
  }];
}
