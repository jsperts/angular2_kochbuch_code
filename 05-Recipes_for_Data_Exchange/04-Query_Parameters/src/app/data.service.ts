import { Injectable } from '@angular/core';
import {
    Http,
    RequestOptions,
    URLSearchParams
} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  http: Http;
  url: string;
  constructor(http: Http) {
    this.http = http;
    this.url = 'http://127.0.0.1:3000/data';
  }

  getData() {
    const limit = 1;

    const params = new URLSearchParams();
    params.set('limit', String(limit));

    const requestOptions = new RequestOptions({search: params});

    const observable = this.http.get(this.url, requestOptions);
    const anotherObservable = observable.map((response) => response.json().data);
    return anotherObservable;
  }
}
