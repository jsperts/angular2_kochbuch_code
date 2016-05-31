import { Component } from '@angular/core';

interface IUser {
  firstname: string,
  lastname: string
}

const users: Array<IUser> = [{firstname: 'Max', lastname: 'Mustermann'}, {firstname: 'John', lastname: 'Doe'}];

@Component({
  selector: 'demo-app',
  styles: [
    '.red { color: red; }',
    '.green { color: green; }'
  ],
  template: `
    <div>Variante 1 mit *</div>
    <ul>
      <li *ngFor="let user of users; let isEven = even; let isOdd = odd" [ngClass]="{red: isOdd, green: isEven}">Name: {{user.firstname}} {{user.lastname}}</li>
    </ul>
    <div>Variante 2 mit template-Attribut</div>
    <ul>
      <li template="ngFor let user of users; let isEven = even; let isOdd = odd" [ngClass]="{red: isOdd, green: isEven}">Name: {{user.firstname}} {{user.lastname}}</li>
    </ul>
    <div>Variante 3 mit HTML5 template-Tag</div>
    <ul>
      <template ngFor let-user [ngForOf]="users" let-isEven="even" let-isOdd="odd">
        <li [ngClass]="{red: isOdd, green: isEven}">Name: {{user.firstname}} {{user.lastname}}</li>
      </template>
    </ul>
  `
})
export class DemoAppComponent {
  users:Array<IUser>;

  constructor() {
    this.users = users;
  }
}
