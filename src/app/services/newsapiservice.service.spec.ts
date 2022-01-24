/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewsapiserviceService } from './newsapiservice.service';

describe('Service: Newsapiservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsapiserviceService]
    });
  });

  it('should ...', inject([NewsapiserviceService], (service: NewsapiserviceService) => {
    expect(service).toBeTruthy();
  }));
});
