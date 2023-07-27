import type { MethodType } from '../models/common.types';
import type { ICommonFilter } from '../models/common-filter.interface';
import type { ICommonResponse } from '../models/common-response.interface';

export interface IRepository<F extends ICommonFilter, T extends ICommonResponse> {
  fetch(filter: F, method: MethodType): Promise<T>;
}
