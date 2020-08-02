import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuButtonComponent } from './menu-button.component';

describe('MenuButtonComponent', () => {
  let component: MenuButtonComponent;
  let fixture: ComponentFixture<MenuButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the `clicked` emitter', () => {
    component.buttonClicked.subscribe((_) => {
      expect().nothing();
    });
    component.emitButtonClicked();
  });
});
