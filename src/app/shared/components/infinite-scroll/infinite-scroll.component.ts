import { ListResponse } from 'src/app/shared/models/response.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent<T extends ListResponse<any>>
  implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
