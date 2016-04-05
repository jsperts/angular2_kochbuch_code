import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import DataService from './data.service';

interface IData {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  providers: [DataService, HTTP_PROVIDERS],
  template: `
    <button (click)="getData()">Get Data</button>
    <button (click)="sendData()">Send Data</button>
    <ul>
      <li *ngFor="#d of data">ID: {{d.id}} Name: {{d.name}}</li>
    </ul>
  `
})
class MyApp {
  dataService: DataService;
  data: Array<IData>;

  constructor(dataService:DataService) {
    this.dataService = dataService;
    this.data = [];
  }

  getData() {
    this.dataService.getData()
        .subscribe((data) => {
          this.data = data;
        });
  }

  sendData() {
    const name = 'New Name';
    this.dataService.sendData(name)
        .subscribe((data) => {
          this.data.push(data);
        });
  }
}

export default MyApp;
