import {Injectable} from 'angular2/core';

const data = ['a', 'b', 'c'];

@Injectable()
class DataService {
  data: Array<string>;
  constructor() {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

export default DataService;
