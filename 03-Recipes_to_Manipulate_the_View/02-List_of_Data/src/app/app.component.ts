import { Component } from '@angular/core';

interface User {
  firstname: string;
  lastname: string;
}

const users: Array<User> = [
  { firstname: 'Max', lastname: 'Mustermann' },
  { firstname: 'John', lastname: 'Doe' }
];

@Component({
  selector: 'app-root',
  template: `
    <div>Variante 1 mit *</div>
    <ul>
      <li *ngFor="let user of users">Name: {{user.firstname}} {{user.lastname}}</li>
    </ul>
    <div>Variante 2 mit template-Attribut</div>
    <ul>
      <li template="ngFor let user of users">Name: {{user.firstname}} {{user.lastname}}</li>
    </ul>
    <div>Variante 3 mit HTML5 template-Tag</div>
    <ul>
      <template ngFor let-user [ngForOf]="users">
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
}
