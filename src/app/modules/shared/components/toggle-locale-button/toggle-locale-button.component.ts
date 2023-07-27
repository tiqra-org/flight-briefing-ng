import { Component } from '@angular/core';

@Component({
  selector: 'toggle-locale-button',
  templateUrl: './toggle-locale-button.component.html',
})
export class ToggleLocaleButtonComponent {
  get locale() {
    return window.location.href.endsWith('sk/') ? 'en' : 'sk';
  }
}
