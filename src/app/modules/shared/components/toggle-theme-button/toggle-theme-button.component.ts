import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

const DARK_MODE_CLASS = 'dark';

@Component({
  selector: 'toggle-theme-button',
  templateUrl: './toggle-theme-button.component.html',
})
export class ToggleThemeButtonComponent {
  constructor(@Inject(DOCUMENT) private _document: HTMLElement) {}
  isDark = false;
  toggleDark = () => {
    this.isDark = !this.isDark;
    const rootHtml = this._document.getElementsByTagName('html')[0];
    if (this.isDark) {
      if (!rootHtml?.classList.contains(DARK_MODE_CLASS)) {
        rootHtml?.classList.add(DARK_MODE_CLASS);
      }
    } else {
      if (rootHtml?.classList.contains(DARK_MODE_CLASS)) {
        rootHtml?.classList.remove(DARK_MODE_CLASS);
      }
    }
  };
}
