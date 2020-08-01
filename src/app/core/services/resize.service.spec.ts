import { TestBed } from '@angular/core/testing';

import { ResizeService } from './resize.service';

describe('ResizeService', () => {
  let service: ResizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly insert resize information into the url', () => {
    const img_url =
      'https://res.cloudinary.com/deuw42oar/image/upload/v1593698711/kc1z0xcxph5ne4muvopq.jpg';
    const expected =
      'https://res.cloudinary.com/deuw42oar/image/upload/w_100,h_200/v1593698711/kc1z0xcxph5ne4muvopq.jpg';
    const result = service.applyTransform(img_url, 100, 200);
    expect(result).toEqual(expected);
  });

  it('should correctly insert resize information into the url with no height info', () => {
    const img_url =
      'https://res.cloudinary.com/deuw42oar/image/upload/v1593698711/kc1z0xcxph5ne4muvopq.jpg';
    const expected =
      'https://res.cloudinary.com/deuw42oar/image/upload/w_100,/v1593698711/kc1z0xcxph5ne4muvopq.jpg';
    const result = service.applyTransform(img_url, 100);
    expect(result).toEqual(expected);
  });

  it('should correctly insert resize information into the url with no width info', () => {
    const img_url =
      'https://res.cloudinary.com/deuw42oar/image/upload/v1593698711/kc1z0xcxph5ne4muvopq.jpg';
    const expected =
      'https://res.cloudinary.com/deuw42oar/image/upload/h_100/v1593698711/kc1z0xcxph5ne4muvopq.jpg';
    const result = service.applyTransform(img_url, undefined, 100);
    expect(result).toEqual(expected);
  });
  it('should correctly insert no information into the url with no width not height provided', () => {
    const img_url =
      'https://res.cloudinary.com/deuw42oar/image/upload/v1593698711/kc1z0xcxph5ne4muvopq.jpg';
    const expected =
      'https://res.cloudinary.com/deuw42oar/image/upload//v1593698711/kc1z0xcxph5ne4muvopq.jpg';
    const result = service.applyTransform(img_url);
    expect(result).toEqual(expected);
  });
});
