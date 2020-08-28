import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableUsernameComponent } from './clickable-username.component';

describe('ClickableUsernameComponent', () => {
  let component: ClickableUsernameComponent;
  let fixture: ComponentFixture<ClickableUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClickableUsernameComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableUsernameComponent);
    component = fixture.componentInstance;
    component.username = 'test123';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the users profile', () => {
    spyOn(component['router'], 'navigate');
    component.navigateToProfile();
    expect(component['router'].navigate).toHaveBeenCalledWith([
      'profile/test123/',
    ]);
  });
});
