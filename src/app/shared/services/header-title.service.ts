import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderTitleService {
  private titleChangeSource = new BehaviorSubject<string>('Twitter');
  titleChange = this.titleChangeSource.asObservable();

  constructor() {}

  /**
   * Emits the titleChange observable with the new title.
   * @param newTitle string
   */
  changeTitle(newTitle: string): void {
    this.titleChangeSource.next(newTitle);
  }
}
