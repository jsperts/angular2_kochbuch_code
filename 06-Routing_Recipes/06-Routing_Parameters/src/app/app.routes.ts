import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductComponent },
];

export const routing = RouterModule.forRoot(routes);
