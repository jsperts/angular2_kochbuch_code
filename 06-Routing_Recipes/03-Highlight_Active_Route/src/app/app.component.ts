import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: ['.active-route { color: red; }'],
  template: `
    <nav>
      <ul>
        <li><a routerLink="" routerLinkActive="active-route"
          [routerLinkActiveOptions]="{exact: true}">Home</a></li>
        <li><a routerLink="products" routerLinkActive="active-route">Products</a></li>
        <li><a routerLink="admin" routerLinkActive="active-route">Admin</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
