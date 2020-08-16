import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageEditFormImageComponent } from './profile-page-edit-form-image.component';
import { UserProfileMockResponse } from 'src/app/core/mocks/user.mock';

describe('ProfilePageEditFormImageComponent', () => {
  let component: ProfilePageEditFormImageComponent;
  let fixture: ComponentFixture<ProfilePageEditFormImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePageEditFormImageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageEditFormImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset the control to its default state', () => {
    component['image'] = <File>new Blob(['test']);
    component.imgSrc = '123';
    component.resetImg();
    expect(component['image']).toEqual(null);
    expect(component.imgSrc).toEqual('assets/profilepic.png');
  });

  it('should preview the image', () => {
    const blob = new Blob(['test123']);
    const file = <File>blob;
    const fileList = {
      0: file,
      1: file,
      length: 2,
      item: (index: number) => file,
    };
    component.preview(fileList);
    expect(component['image']).toEqual(file);
  });

  it('should get the value', () => {
    const file = new File(['test123'], 'name');
    component['image'] = file;
    var result = component.getValue();
    expect(result).toEqual(file);
  });

  it('should return null if there is no value', () => {
    component['image'] = null;
    var result = component.getValue();
    expect(result).toEqual(null);
  });

  it('should setup the initial value', () => {
    component.setupInitValues({ ...UserProfileMockResponse }['image_url']);
    expect(component.imgSrc).toEqual(
      { ...UserProfileMockResponse }['image_url']
    );
  });
});
