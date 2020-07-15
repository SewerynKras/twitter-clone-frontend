import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve my profile', () => {});

  it('should retrieve a list of profiles', () => {});

  it('should retrieve the next page of a list', () => {});

  it('should update my profile', () => {});

  it('should create a new profile', () => {});

  it('should retrieve someones profile', () => {});

  it('should retrieve someones followers list', () => {});

  it('should retrieve someones following list', () => {});
});
