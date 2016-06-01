import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  http: Http;
  url: string;
  constructor(http: Http) {
    this.http = http;
    this.url = 'http://127.0.0.1:3000/error';
  }

  getData() {
    const observable = this.http.get(this.url)
        .map((response) => response.json().data);
    const anotherObservable = observable.catch((response) => {
      return this.handleResponseError(response);
    });
    return anotherObservable;
  }

  handleResponseError(response) {
    let errorString = '';
    if (response.status === 500) {
      errorString = `Server error: ${response.json().error}`;
    } else {
      errorString = 'Some error occurred'
    }
    return Observable.throw(errorString);
  }
}
