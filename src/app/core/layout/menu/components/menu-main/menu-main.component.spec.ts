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
});
