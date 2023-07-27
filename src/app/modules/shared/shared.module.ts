import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpTextComponent } from './components/help-text/help-text.component';
import { UpperCaseDirective } from './directives/uppercase.directive';
import { ToggleLocaleButtonComponent } from './components/toggle-locale-button/toggle-locale-button.component';
import { ToggleThemeButtonComponent } from './components/toggle-theme-button/toggle-theme-button.component';
import { LoadingIconComponent } from './icons/loading-icon/loading-icon.component';
import { QuestionIconComponent } from './icons/question-icon/question-icon.component';
import { DarkModeIconComponent } from './icons/dark-mode-icon/dark-mode-icon.component';
import { LightModeIconComponent } from './icons/light-mode-icon/light-mode-icon.component';
import { ApiClient } from './services/api/api-client';


@NgModule({
  declarations: [
    HelpTextComponent,
    ToggleLocaleButtonComponent,
    ToggleThemeButtonComponent,
    LoadingIconComponent,
    QuestionIconComponent,
    DarkModeIconComponent,
    LightModeIconComponent,
    UpperCaseDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HelpTextComponent,
    ToggleLocaleButtonComponent,
    ToggleThemeButtonComponent,
    LoadingIconComponent,
    QuestionIconComponent,
    DarkModeIconComponent,
    LightModeIconComponent,
    UpperCaseDirective,
  ],
  providers: [
    ApiClient,
  ]
})
export class SharedModule { }
