import { TestBed, inject } from '@angular/core/testing';

import { PageConfigService } from './page-config.service';

describe('PageConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageConfigService]
    });
  });

  it('should be created', inject([PageConfigService], (service: PageConfigService) => {
    expect(service).toBeTruthy();
  }));
});
