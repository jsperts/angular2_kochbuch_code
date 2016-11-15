import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <ul>
        <li><a routerLink="">Home</a></li>
        <li><a routerLink="products">Products</a></li>
        <li><a routerLink="admin">Admin</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
