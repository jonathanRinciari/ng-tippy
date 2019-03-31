import { TestBed } from '@angular/core/testing';

import { NgTippyService } from './ng-tippy.service';

describe('NgTippyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgTippyService = TestBed.get(NgTippyService);
    expect(service).toBeTruthy();
  });
});
