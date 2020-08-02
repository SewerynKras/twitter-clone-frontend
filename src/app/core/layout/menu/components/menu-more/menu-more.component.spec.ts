import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMoreComponent } from './menu-more.component';

describe('MenuMoreComponent', () => {
  let component: MenuMoreComponent;
  let fixture: ComponentFixture<MenuMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
