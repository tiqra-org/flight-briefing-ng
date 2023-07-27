import { MethodType } from '../../models/common.types';

export interface IApiClient<T> {
  fetch(url: string, filter: any, method: MethodType): Promise<T>;
}
