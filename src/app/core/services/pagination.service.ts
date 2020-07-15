import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ListResponse } from './../../shared/models/response.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  constructor(private http: HttpClient) {}

  /**
   * Retrieves the selected page from a paginated response.
   * @param baseUrl string
   * @param pageNum number
   */
  getPage(baseUrl: string, pageNum: number): Observable<ListResponse<any>> {
    return this.http.get<ListResponse<any>>(`${baseUrl}?page=${pageNum}`);
  }
}
