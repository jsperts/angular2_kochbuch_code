import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button type="button" (click)="toggleVisibility()">Toggle Visibility</button>
    <app-second *ngIf="isVisible"></app-second>
  `
})
export class AppComponent {
  isVisible = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
