import { TestBed } from '@angular/core/testing';

import { StoragePiecesService } from './storage-pieces.service';

describe('StoragePiecesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoragePiecesService = TestBed.get(StoragePiecesService);
    expect(service)
    .toBeTruthy();
  });
});
