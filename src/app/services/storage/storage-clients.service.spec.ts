import { TestBed } from '@angular/core/testing';

import { StorageClientsService } from './storage-clients.service';

describe('StorageClientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageClientsService = TestBed.get(StorageClientsService);
    expect(service)
    .toBeTruthy();
  });
});
