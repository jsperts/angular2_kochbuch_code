import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Subscription } from 'rxjs/Subscription';

interface Data {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
    <button (click)="getData()">Get Data</button>
    <button (click)="cancelRequest()">Cancel</button>
    <ul>
      <li *ngFor="let d of data">ID: {{d.id}} Name: {{d.name}}</li>
    </ul>
  `
})
export class AppComponent {
  dataService: DataService;
  data: Array<Data>;
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
