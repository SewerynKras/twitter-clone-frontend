import { httpRequestParams } from './../../models/http.model';
import { map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { PaginationService } from './../../../core/services/pagination.service';
import { ListResponse } from 'src/app/shared/models/response.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export class NoPageLeftError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NoPageLeftError';
  }
}

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent<T> implements OnInit {
  @Output() results = new EventEmitter<T[]>();

  serviceMethod: (args: httpRequestParams) => Observable<ListResponse<any>>;
  serviceMethodArgs: httpRequestParams;
  savedPage: ListResponse<T>;

  constructor(private pagination: PaginationService) {}

  ngOnInit(): void {}

  /**
   * Sets up the initial values.
   * NOTE: Remember to bind the service context to the serviceMethod.
   * @param serviceMethod method used to retrieve data
   * @param args object containing key:value pairs of arguments passed to the serviceMethod
   * @param pageNum defaults to 1
   */
  setupInitPageValues(
    serviceMethod: (args: httpRequestParams) => Observable<ListResponse<T>>,
    args: httpRequestParams,
    pageNum = 1
  ): void {
    this.serviceMethod = serviceMethod;
    this.serviceMethodArgs = args;

    // retrieve the first page
    this._loadPageGeneric(pageNum).subscribe();
  }

  /**
   * Retrieves the selected page.
   * Throws a NoPageLeftError if it's not found.
   * @param page either `next` or `previous` property of a ListResponse
   */
  private _loadPageGeneric(page: number | null): Observable<ListResponse<T>> {
    if (page == null) return throwError(new NoPageLeftError('No page found!'));
    return this.pagination
      .getPage(this.serviceMethod, this.serviceMethodArgs, page)
      .pipe(
        map((newPage) => {
          // Cache the new list and return it back to the user.
          this.savedPage = newPage;
          this.results.emit(newPage.results);
          return newPage;
        })
      );
  }

  /**
   * Retrieves the next page.
   * This method throws a NoPageLeftError if the saved list does not have a next page.
   */
  loadNextPage(): Observable<ListResponse<T>> {
    return this._loadPageGeneric(this.savedPage.next);
  }

  /**
   * Retrieves the previous page.
   * This method throws a NoPageLeftError if the saved list does not have a previous page.
   */
  loadPrevPage(): Observable<ListResponse<T>> {
    return this._loadPageGeneric(this.savedPage.previous);
  }

  onScroll($event: any): void {
    this.loadNextPage().subscribe();
  }
}
