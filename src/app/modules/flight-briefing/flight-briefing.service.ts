import { Injectable } from '@angular/core';
import {
  IFlightBriefingFilter,
  IFlightBriefingResponse,
} from './flight-briefing.model';
import { FlightBriefingRepository } from './flight-briefing.repository';
import { IFlightBriefingService } from './flight-briefing.service.interface';

@Injectable()
export class FlightBriefingService implements IFlightBriefingService {
  constructor(private repository: FlightBriefingRepository) {}

  fetch(filter: IFlightBriefingFilter): Promise<IFlightBriefingResponse> {
    return this.repository.fetch(filter, 'POST');
  }
}
