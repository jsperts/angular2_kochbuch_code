import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <ul>
        <li><button type="button" (click)="navigate('')">Home</button></li>
        <li><button type="button" (click)="navigate('products')">Products</button></li>
        <li><button type="button" (click)="navigate('admin')">Admin</button></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  route: ActivatedRoute;
  router: Router;
  constructor(route: ActivatedRoute, router: Router) {
    this.route = route;
    this.router = router;
  }

  navigate(path) {
    this.router.navigate([ `/${path}` ], { relativeTo: this.route });
  }
}
