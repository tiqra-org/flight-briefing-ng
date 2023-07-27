import { ICommonFilter } from "../shared/models/common-filter.interface"
import { ICommonResponse } from "../shared/models/common-response.interface"

export interface IFlightBriefingFilter extends ICommonFilter {
  params: Array<IFlightBriefingFilterData>;
}

export interface IFlightBriefingFilterData {
  id?: string;
  reportTypes: Array<string>;
  airports: Array<string>;
  countries: Array<string>;
}

export interface IFlightBriefingResponse extends ICommonResponse {
  result: Array<IFlightBriefingListItem>;
}

export interface IFlightBriefingListItem {
  placeId: string;
  queryType: string;
  receptionTime: string;
  refs: Array<string>;
  reportTime: string;
  reportType: string;
  stationId: string;
  text: string;
  textHTML: string;
}