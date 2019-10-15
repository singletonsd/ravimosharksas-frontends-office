import { TestBed } from '@angular/core/testing';

import { StorageAddressesService } from './storage-addresses.service';

describe('StorageAddressesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageAddressesService = TestBed.get(StorageAddressesService);
    expect(service)
    .toBeTruthy()
    .catch();
  });
});
