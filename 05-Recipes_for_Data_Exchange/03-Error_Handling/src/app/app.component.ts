import { Component } from '@angular/core';
import { DataService } from './data.service';

interface Data {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
    <button (click)="getData()">Get Data</button>
    <p>
      Error: {{errorText}}
    </p>
    <ul>
      <li *ngFor="let d of data">ID: {{d.id}} Name: {{d.name}}</li>
    </ul>
  `
})
export class AppComponent {
  dataService: DataService;
  data: Array<Data>;
  errorText: string;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  getData() {
    this.dataService.getData()
        .subscribe((data) => {
          this.data = data;
        }, (errorText) => {
          this.errorText = errorText;
        });
  }
}
