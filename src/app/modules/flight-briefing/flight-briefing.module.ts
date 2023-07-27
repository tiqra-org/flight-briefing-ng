import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { FlightBriefingComponent } from './flight-briefing.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { FlightBriefingService } from './flight-briefing.service';
import { FlightBriefingRepository } from './flight-briefing.repository';

@NgModule({
  declarations: [FilterComponent, FlightBriefingComponent, ListComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [FlightBriefingComponent],
  providers: [FlightBriefingService, FlightBriefingRepository],
})
export class FlightBriefingModule {}
