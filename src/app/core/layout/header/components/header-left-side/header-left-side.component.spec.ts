import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLeftSideComponent } from './header-left-side.component';

describe('HeaderLeftSideComponent', () => {
  let component: HeaderLeftSideComponent;
  let fixture: ComponentFixture<HeaderLeftSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLeftSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
