import { Injectable } from '@angular/core';

import { ENVIRONMENT } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private prefix: string;

  constructor() {
    this.prefix = ENVIRONMENT.admin_employee.prefix + '-';
  }

  /**
   *
   * Clears specified or all storages.
   *
   */
  public clear(storage: 'l' | 's'): boolean {
    switch (storage) {
      case undefined:
        localStorage.clear();
        sessionStorage.clear();
        break;
      case 'l':
        localStorage.clear();
        break;
      case 's':
        sessionStorage.clear();
        break;
      default:
        return false;
    }
    return true;
  }

  /**
   *
   * Gets value of supplied key from the specified storage.
   *
   */
  public get(storage: 'l' | 's', key: string): any {
    if (!key) {
      return undefined;
    }
    key = this.prefix + key;
    switch (storage) {
      case 'l':
        return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;
      case 's':
        return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : null;
      default:
        return undefined
    }
  }

  /**
   *
   * Removes supplied key-value pair from the specified storage.
   *
   */
  public remove(storage: 'l' | 's', key: string): boolean {
    if (!key) {
      return false;
    }

    key = this.prefix + key;

    switch (storage) {
      case 'l':
        localStorage.removeItem(key);
        break;
      case 's':
        sessionStorage.removeItem(key);
        break;
      default:
        return false;
    }
    return true;
  }

  /**
   *
   * Saves supplied key-value pair to specified storage.
   *
   */
  public set(storage: 'l' | 's', key: string, value: any): boolean {
    if (!key) {
      return false;
    }

    key = this.prefix + key;

    switch (storage) {
      case 'l':
        localStorage.setItem(key, JSON.parse(value));
        break;
      case 's':
        sessionStorage.setItem(key, JSON.parse(value));
        break;
      default:
        return false;
    }
    return true;
  }
}
