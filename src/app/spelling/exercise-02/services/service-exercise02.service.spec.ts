import { TestBed, inject } from '@angular/core/testing';

import { ServiceExercise02Service } from './service-exercise02.service';

describe('ServiceExercise02Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceExercise02Service]
    });
  });

  it('should be created', inject([ServiceExercise02Service], (service: ServiceExercise02Service) => {
    expect(service).toBeTruthy();
  }));
});
