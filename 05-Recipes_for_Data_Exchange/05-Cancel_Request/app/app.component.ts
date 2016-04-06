import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import DataService from './data.service';
import {Subscription} from 'rxjs/Subscription';

interface IData {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  providers: [DataService, HTTP_PROVIDERS],
  template: `
    <button (click)="getData()">Get Data</button>
    <button (click)="cancelRequest()">Cancel</button>
    <ul>
      <li *ngFor="#d of data">ID: {{d.id}} Name: {{d.name}}</li>
    </ul>
  `
})
class MyApp {
  dataService:DataService;
  data: Array<IData>;
  subscription: Subscription;

  constructor(dataService:DataService) {
    this.dataService = dataService;
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

export default MyApp;
