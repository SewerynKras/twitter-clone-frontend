import { MatSelect } from '@angular/material/select';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMoreComponent } from './menu-more.component';

describe('MenuMoreComponent', () => {
  let component: MenuMoreComponent;
  let fixture: ComponentFixture<MenuMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuMoreComponent],
      providers: [
        {
          provide: MatSelect,
          useValue: {
            open: () => {},
            close: () => {},
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the menu', () => {
    component.menuButtons = {
      open: () => {},
      close: () => {},
    } as MatSelect;
    spyOn(component.menuButtons, 'open');
    component.openMenu();
    expect(component.menuButtons.open).toHaveBeenCalled();
  });

  it('should close the menu', () => {
    component.menuButtons = {
      open: () => {},
      close: () => {},
    } as MatSelect;
    spyOn(component.menuButtons, 'close');
    component.closeMenu();
    expect(component.menuButtons.close).toHaveBeenCalled();
  });
});
