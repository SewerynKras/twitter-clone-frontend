import { MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { MatSelect } from '@angular/material/select';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMoreComponent } from './menu-more.component';

describe('MenuMoreComponent', () => {
  let component: MenuMoreComponent;
  let fixture: ComponentFixture<MenuMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [MenuMoreComponent],
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
    component.menuTrigger = {
      openMenu: () => {},
      closeMenu: () => {},
    } as MatMenuTrigger;
    spyOn(component.menuTrigger, 'openMenu');
    component.openMenu();
    expect(component.menuTrigger.openMenu).toHaveBeenCalled();
  });

  it('should close the menu', () => {
    component.menuTrigger = {
      openMenu: () => {},
      closeMenu: () => {},
    } as MatMenuTrigger;
    spyOn(component.menuTrigger, 'closeMenu');
    component.closeMenu();
    expect(component.menuTrigger.closeMenu).toHaveBeenCalled();
  });
});
