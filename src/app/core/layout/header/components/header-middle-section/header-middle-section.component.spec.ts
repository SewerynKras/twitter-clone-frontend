import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMiddleSectionComponent } from './header-middle-section.component';

describe('HeaderMiddleSectionComponent', () => {
  let component: HeaderMiddleSectionComponent;
  let fixture: ComponentFixture<HeaderMiddleSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderMiddleSectionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMiddleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should update the text when the title service emits', () => {
    component['titleService'].changeTitle('newText');
    expect(component.title).toEqual('newText');
  });
});
