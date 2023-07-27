import { IFlightBriefingFilter, IFlightBriefingResponse } from "./flight-briefing.model";

export interface IFlightBriefingService {
  fetch(filter: IFlightBriefingFilter): Promise<IFlightBriefingResponse>;
}