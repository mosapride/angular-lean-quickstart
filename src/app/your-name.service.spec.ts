import { TestBed, inject } from '@angular/core/testing';

import { YourNameService } from './your-name.service';

describe('YourNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YourNameService]
    });
  });

  it('should be created', inject([YourNameService], (service: YourNameService) => {
    expect(service).toBeTruthy();
  }));
});
