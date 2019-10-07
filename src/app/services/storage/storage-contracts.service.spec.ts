import { TestBed } from '@angular/core/testing';

import { StorageContractsService } from './storage-contracts.service';

describe('StorageContractsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageContractsService = TestBed.get(StorageContractsService);
    expect(service)
    .toBeTruthy();
  });
});
