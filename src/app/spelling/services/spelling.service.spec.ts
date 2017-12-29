import { TestBed, inject } from '@angular/core/testing';

import { SpellingService } from './spelling.service';

describe('SpellingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpellingService]
    });
  });

  it('should be created', inject([SpellingService], (service: SpellingService) => {
    expect(service).toBeTruthy();
  }));
});
