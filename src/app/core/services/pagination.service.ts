import {
  httpRequestParams,
  httpRequestArgs,
} from './../../shared/models/http.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponse } from './../../shared/models/response.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  constructor() {}

  getPage(
    getter: (
      args: httpRequestArgs,
      params: httpRequestParams
    ) => Observable<ListResponse<any>>,
    args: httpRequestArgs,
    params: httpRequestParams,
    pageNum: number
  ): Observable<ListResponse<any>> {
    params['page'] = pageNum;
    return getter(args, params);
  }
}
