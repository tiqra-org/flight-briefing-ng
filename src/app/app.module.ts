import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './modules/shared/shared.module';
import { FlightBriefingModule } from './modules/flight-briefing/flight-briefing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';

@NgModule({
  declarations: [AppComponent, BackgroundComponent],
  imports: [FlightBriefingModule, BrowserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
