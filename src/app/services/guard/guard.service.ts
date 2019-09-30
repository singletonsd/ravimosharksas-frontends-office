import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private readonly storageService: StorageService) { }

  isLogged(): boolean {
    if (this.storageService.getCurrentUser()) {
      return true;
    }

    return false;
  }

  getAccessLevel(): number {
    return 1;
  }

  hasCommonAccess(): boolean {
    return this.isLogged();
  }

  hasViewerAccess(): boolean {
    return this.getAccessLevel() <= 2;
  }

  hasEditorAccess(): boolean {
    return this.getAccessLevel() <= 1;
  }

  hasAdminAccess(): boolean {
    return this.getAccessLevel() === 0;
  }
}
