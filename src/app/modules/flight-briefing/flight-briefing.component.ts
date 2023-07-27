import { Component } from '@angular/core';
import {
  IFlightBriefingFilter,
  IFlightBriefingFilterData,
  IFlightBriefingListItem,
} from './flight-briefing.model';
import { FlightBriefingService } from './flight-briefing.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'flight-briefing',
  templateUrl: './flight-briefing.component.html',
})
export class FlightBriefingComponent {
  constructor(private service: FlightBriefingService) {}

  pending = false;

  data?: IFlightBriefingListItem[];

  fetchData = async (data: IFlightBriefingFilterData) => {
    this.pending = true;

    const requestData: IFlightBriefingFilter = {
      id: uuidv4(),
      method: 'query',
      params: [
        {
          ...data,
        },
      ],
    };

    const responseData = await this.service.fetch(requestData);

    if (responseData.error) {
      alert(responseData.error.message);
    } else {
      this.data = responseData.result;
    }

    this.pending = false;
  };
}
