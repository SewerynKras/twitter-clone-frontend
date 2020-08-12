import { HeaderTitleService } from './../../../../../shared/services/header-title.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-middle-section',
  templateUrl: './header-middle-section.component.html',
  styleUrls: ['./header-middle-section.component.scss'],
})
export class HeaderMiddleSectionComponent implements OnInit {
  title: string;

  constructor(private titleService: HeaderTitleService) {}

  ngOnInit(): void {
    this.titleService.titleChange.subscribe((title) => {
      this.title = title;
    });
  }
}
