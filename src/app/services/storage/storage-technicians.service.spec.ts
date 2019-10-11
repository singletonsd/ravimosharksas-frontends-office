import { TestBed } from '@angular/core/testing';

import { StorageTechniciansService } from './storage-technicians.service';

describe('StorageTechniciansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageTechniciansService = TestBed.get(StorageTechniciansService);
    expect(service)
    .toBeTruthy()
    .catch();
  });
});
