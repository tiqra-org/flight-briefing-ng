import { Injectable } from '@angular/core';
import { MethodType } from '../shared/models/common.types';
import { IRepository } from '../shared/repositories/repository.interface';
import {
  IFlightBriefingFilter,
  IFlightBriefingResponse,
} from './flight-briefing.model';
import { API } from './flight-briefing.constants';
import { ApiClient } from '../shared/services/api/api-client';

@Injectable()
export class FlightBriefingRepository
  implements IRepository<IFlightBriefingFilter, IFlightBriefingResponse>
{
  constructor(private apiClient: ApiClient<IFlightBriefingResponse>) {}

  fetch(
    filter: IFlightBriefingFilter,
    method: MethodType,
  ): Promise<IFlightBriefingResponse> {
    return this.apiClient.fetch(API.OPMET, filter, method);
  }
}
