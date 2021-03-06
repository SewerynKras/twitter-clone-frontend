import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { MatSelect } from '@angular/material/select';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProfileDialogComponent } from './menu-profile-dialog.component';
import { DatePipe } from '@angular/common';

describe('MenuProfileDialogComponent', () => {
  let component: MenuProfileDialogComponent;
  let fixture: ComponentFixture<MenuProfileDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatMenuModule, RouterTestingModule],
      declarations: [MenuProfileDialogComponent],
      providers: [DatePipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProfileDialogComponent);
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

  it('should log out the user', () => {
    component['auth'] = jasmine.createSpyObj('auth', ['logout']);
    component.performLogout();
    expect(component['auth'].logout).toHaveBeenCalled();
  });

  it('should navigate to the users profile page', () => {
    spyOn(component['router'], 'navigate');
    spyOn(
      component['usersService'],
      'getBaseUserInfoFromStorage'
    ).and.returnValue({ username: 'test123', display_name: '', image_url: '' });
    component.navigateToProfile();
    expect(component['router'].navigate).toHaveBeenCalledWith([
      'profile/test123/',
    ]);
  });
});
