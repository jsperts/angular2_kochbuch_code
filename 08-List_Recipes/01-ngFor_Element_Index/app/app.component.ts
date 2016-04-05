import {Component} from 'angular2/core';

interface IUser {
  firstname: string,
  lastname: string
}

const users:Array<IUser> = [{firstname: 'Max', lastname: 'Mustermann'}, {firstname: 'John', lastname: 'Doe'}];

@Component({
  selector: 'my-app',
  template: `
    <div>Variante 1 mit *</div>
    <ul>
      <li *ngFor="#user of users; #i = index">Index: {{i}}, Name: {{user.firstname}} {{user.lastname}}</li>
    </ul>
    <div>Variante 2 mit template-Attribut</div>
    <ul>
      <li template="ngFor #user of users; #i = index">Index: {{i}}, Name: {{user.firstname}} {{user.lastname}}</li>
    </ul>
    <div>Variante 3 mit HTML5 template-Tag</div>
    <ul>
      <template ngFor #user [ngForOf]="users" #i="index">
        <li>Index: {{i}}, Name: {{user.firstname}} {{user.lastname}}</li>
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

export default MyApp;
