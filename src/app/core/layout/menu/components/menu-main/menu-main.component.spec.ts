import { MatMenuModule } from '@angular/material/menu';
import { MenuMoreComponent } from './../menu-more/menu-more.component';
import { MenuProfileComponent } from './../menu-profile/menu-profile.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMainComponent } from './menu-main.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MenuMainComponent', () => {
  let component: MenuMainComponent;
  let fixture: ComponentFixture<MenuMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuMainComponent,
        MenuProfileComponent,
        MenuMoreComponent,
      ],
      imports: [HttpClientTestingModule, MatMenuModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.moreComponent = {
      openMenu: () => {},
    } as MenuMoreComponent;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select the correct button', () => {
    component.buttonSpecs = [
      { icon_name: 'test0', text: 'test0', selected: true },
      { icon_name: 'test1', text: 'test1', selected: false },
      { icon_name: 'test2', text: 'test2', selected: false },
    ];
    component.selectButton({
      icon_name: 'test2',
      text: 'test2',
      selected: false,
    });
    expect(component.buttonSpecs[0].selected).toEqual(false);
    expect(component.buttonSpecs[2].selected).toEqual(true);
  });

  it('should should call all necessary methods when a button (not "more") is clicked', () => {
    component.buttonSpecs = [
      { icon_name: 'test0', text: 'test0', selected: true },
      { icon_name: 'test1', text: 'test1', selected: false },
      { icon_name: 'test2', text: 'test2', selected: false },
    ];
    spyOn(component, 'selectButton');
    spyOn(component, 'openMoreMenu');
    component.handleButtonClick({
      icon_name: 'test2',
      text: 'test2',
      selected: false,
    });
    expect(component.selectButton).toHaveBeenCalled();
    expect(component.openMoreMenu).not.toHaveBeenCalled();
  });
  it('should should call all necessary methods when a button ("more") is clicked', () => {
    component.buttonSpecs = [
      { icon_name: 'test0', text: 'test0', selected: true },
      { icon_name: 'test1', text: 'test1', selected: false },
      { icon_name: 'test2', text: 'More', selected: false },
    ];
    spyOn(component, 'selectButton');
    spyOn(component, 'openMoreMenu');
    component.handleButtonClick({
      icon_name: 'test2',
      text: 'More',
      selected: false,
    });
    expect(component.selectButton).not.toHaveBeenCalled();
    expect(component.openMoreMenu).toHaveBeenCalled();
  });

  it('should should open the "more" menu', () => {
    spyOn(component.moreComponent, 'openMenu');
    component.openMoreMenu();
    expect(component.moreComponent.openMenu).toHaveBeenCalled();
  });
});
