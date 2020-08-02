import { MenuProfileComponent } from './../menu-profile/menu-profile.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMainComponent } from './menu-main.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MenuMainComponent', () => {
  let component: MenuMainComponent;
  let fixture: ComponentFixture<MenuMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuMainComponent, MenuProfileComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
