import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataService } from './data.service';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [ DataService ]
})
export class AppModule { }
