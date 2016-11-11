import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routes';
import { AppComponent }  from './app.component';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home.component';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, AdminComponent, HomeComponent, ProductsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
