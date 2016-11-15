import { Component } from '@angular/core';

interface User {
  firstname: string;
  lastname: string;
  id: number;
}

const users: Array<User> = [
  {firstname: 'Max', lastname: 'Mustermann', id: 0},
  {firstname: 'John', lastname: 'Doe', id: 1}
];
const users2: Array<User> = [
  {firstname: 'Max', lastname: 'Mustermann', id: 0},
  {firstname: 'John', lastname: 'Notdoe', id: 2}
];

@Component({
  selector: 'app-root',
  template: `
    <button (click)="setNewList()">New List</button>
    <div>Variante 1 mit * ohne trackBy</div>
    <ul>
      <li *ngFor="let user of users">Name: {{user.firstname}} {{user.lastname}}</li>
    </ul>
    <div>Variante 1 mit * mit trackBy</div>
    <ul>
      <li *ngFor="let user of users; trackBy:trackById">
        Name: {{user.firstname}} {{user.lastname}}
      </li>
    </ul>
    <div>Variante 2 mit template-Attribut ohne trackBy</div>
    <ul>
      <li template="ngFor let user of users">
        Name: {{user.firstname}} {{user.lastname}}
      </li>
    </ul>
    <div>Variante 2 mit template-Attribut mit trackBy</div>
    <ul>
      <li template="ngFor let user of users; trackBy:trackById">
        Name: {{user.firstname}} {{user.lastname}}
      </li>
    </ul>
    <div>Variante 3 mit HTML5 template-Tag ohne trackBy</div>
    <ul>
      <template ngFor let-user [ngForOf]="users">
        <li>Name: {{user.firstname}} {{user.lastname}}</li>
      </template>
    </ul>
    <div>Variante 3 mit HTML5 template-Tag mit trackBy</div>
    <ul>
      <template ngFor let-user [ngForOf]="users" [ngForTrackBy]="trackById">
        <li>Name: {{user.firstname}} {{user.lastname}}</li>
      </template>
    </ul>
  `
})
export class AppComponent {
  users: Array<User>;

  constructor() {
    this.users = users;
  }

  setNewList() {
    this.users = users2;
  }

  trackById(index, user) {
    return user.id;
  }
}
