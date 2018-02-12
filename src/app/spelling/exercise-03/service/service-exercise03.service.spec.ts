import { TestBed, inject } from '@angular/core/testing';

import { ServiceExercise03Service } from './service-exercise03.service';

describe('ServiceExercise03Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceExercise03Service]
    });
  });

  it('should be created', inject([ServiceExercise03Service], (service: ServiceExercise03Service) => {
    expect(service).toBeTruthy();
  }));
});
