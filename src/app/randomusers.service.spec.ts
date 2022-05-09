import { TestBed } from '@angular/core/testing';

import { RandomusersService } from './randomusers.service';

describe('RandomusersService', () => {
  let service: RandomusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
