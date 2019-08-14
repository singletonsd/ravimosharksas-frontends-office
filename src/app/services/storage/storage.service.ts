import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getCurrentUser(): string {
    return undefined;
  }

  public async reconnect(): Promise<boolean> {
    // TODO:
    return new Promise(resolve => {
      resolve(true);
    });
  }
}
