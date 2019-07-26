import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private readonly router: Router
            , private readonly storageService: StorageService) { }

  isLogged(): boolean {
    if (this.storageService.getCurrentUser()) {
      return true;
    } else {
      return false;
    }
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
