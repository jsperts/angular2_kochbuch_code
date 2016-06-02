import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { DataService } from './data.service';
import { Subscription } from 'rxjs/Subscription';

interface IData {
  id: number;
  name: string;
}

@Component({
  selector: 'demo-app',
  providers: [DataService, HTTP_PROVIDERS],
  template: `
    <button (click)="getData()">Get Data</button>
    <button (click)="cancelRequest()">Cancel</button>
    <ul>
      <li *ngFor="let d of data">ID: {{d.id}} Name: {{d.name}}</li>
    </ul>
  `
})
export class DemoAppComponent {
  dataService: DataService;
  data: Array<IData>;
  subscription: Subscription;

  constructor(dataService: DataService) {
    this.dataService = dataService;
    this.data = [];
  }

  getData() {
    this.subscription = this.dataService.getData()
        .subscribe((data) => {
          this.data = data;
        });
  }

  cancelRequest() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
