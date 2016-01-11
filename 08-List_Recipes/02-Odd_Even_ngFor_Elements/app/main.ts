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
      .red {
        color: red;
      }
      .green {
        color: green;
      }
    </style>
    <div>Variante 1 mit *</div>
    <ul>
      <li *ngFor="#user of users; #isEven = even; #isOdd = odd" [ngClass]="{red: isOdd, green: isEven}">Name: {{user.firstname}} {{user.lastname}}</li>
    </ul>
    <div>Variante 2 mit template-Attribut</div>
    <ul>
      <li template="ngFor #user of users; #isEven = even; #isOdd = odd" [ngClass]="{red: isOdd, green: isEven}">Name: {{user.firstname}} {{user.lastname}}</li>
    </ul>
    <div>Variante 3 mit HTML5 template-Tag</div>
    <ul>
      <template ngFor #user [ngForOf]="users" #isEven="even" #isOdd="odd">
        <li [ngClass]="{red: isOdd, green: isEven}">Name: {{user.firstname}} {{user.lastname}}</li>
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
