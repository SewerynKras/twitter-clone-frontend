import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableUsernameComponent } from './clickable-username.component';

describe('ClickableUsernameComponent', () => {
  let component: ClickableUsernameComponent;
  let fixture: ComponentFixture<ClickableUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickableUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
