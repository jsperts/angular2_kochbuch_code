import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

interface IUser {
  firstname: string,
  lastname: string
}

const users:Array<IUser> = [{firstname: 'Max', lastname: 'Mustermann'}, {firstname: 'John', lastname: 'Doe'}];

@Component({
  selector: 'my-app'
})
@View({
  template: `
    <style>
      .first {
        background-color: red;
      }
      .last {
        background-color: green;
      }
    </style>
    <div>Variante 1 mit *</div>
    <ul>
      <li *ngFor="#user of users; #isLast = last; #i = index" [ngClass]="{first: i === 0, last: isLast}">Name: {{user.firstname}} {{user.lastname}}</li>
    </ul>
    <div>Variante 2 mit template-Attribut</div>
    <ul>
      <li template="ngFor #user of users; #isLast = last; #i = index" [ngClass]="{first: i === 0, last: isLast}">Name: {{user.firstname}} {{user.lastname}}</li>
    </ul>
    <div>Variante 3 mit HTML5 template-Tag</div>
    <ul>
      <template ngFor #user [ngForOf]="users" #isLast="last" #i="index">
        <li [ngClass]="{first: i === 0, last: isLast}">Name: {{user.firstname}} {{user.lastname}}</li>
      </template>
    </ul>
  `
})
class MyApp {
  users:Array<IUser>;

  constructor() {
    this.users = users;
  }
}

bootstrap(MyApp);
