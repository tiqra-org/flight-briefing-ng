import { Injectable } from '@angular/core';
import { MethodType } from '../../models/common.types';
import type { IApiClient } from './api-client.interface';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

const enum HttpStatusCodes {
  Ok = 200,
  Created = 201,
  NoContent = 204
}

@Injectable()
export class ApiClient<T> implements IApiClient<T> {

  private async send(url: string, request: RequestInit): Promise<T> {
    const defaults = {
      headers
    }

    const init = Object.assign({}, defaults, request)

    const response = await fetch(url, init)

    if (response.status === HttpStatusCodes.NoContent) {
      return Promise.resolve(null as T)
    } else {
      return response.json()
    }
  }

  fetch(url: string, filter: any, method: MethodType = 'GET'): Promise<T> {
    const body = typeof filter === 'object' ? JSON.stringify(filter) : filter

    const request: RequestInit = {
      method,
      body
    }

    return this.send(url, request)
  }
}
