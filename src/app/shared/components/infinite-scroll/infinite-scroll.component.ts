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

  savedList: ListResponse<T>;
  baseUrl: string;
  scrollDistance: number;

  constructor(private pagination: PaginationService) {}

  ngOnInit(): void {}

  /**
   * saves the initial response and base url used when retrieving different pages.
   * @param list ListResponse<T>
   * @param baseUrl string
   */
  setupInitListValues(list: ListResponse<T>, baseUrl: string): void {
    this.savedList = list;
    this.baseUrl = baseUrl;
    this.scrollDistance = list.count;
    this.results.emit(list.results);
  }

  /**
   * Retrieves the selected page.
   * Throws a NoPageLeftError if it's not found.
   * @param page either `next` or `previous` property of a ListResponse
   */
  private _loadPageGeneric(page: number | null): Observable<ListResponse<T>> {
    if (page == null) return throwError(new NoPageLeftError('No page found!'));
    return this.pagination.getPage(this.baseUrl, page).pipe(
      map((newPage) => {
        // Cache the new list and return it back to the user.
        this.savedList = newPage;
        this.scrollDistance += newPage.count;
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
    return this._loadPageGeneric(this.savedList.next);
  }

  /**
   * Retrieves the previous page.
   * This method throws a NoPageLeftError if the saved list does not have a previous page.
   */
  loadPrevPage(): Observable<ListResponse<T>> {
    return this._loadPageGeneric(this.savedList.previous);
  }

  onScroll($event: any): void {
    this.loadNextPage().subscribe();
  }
}
