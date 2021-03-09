import { Injectable } from '@angular/core';

import { AppConfig } from '../app.config';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  private storage: object = {};

  get(key: string): string {
    key = `${AppConfig.guid}/${key}`;
    return this.storage[key] ?? localStorage.getItem(key) ?? null;
  }

  set(key: string, value: string): void {
    key = `${AppConfig.guid}/${key}`;
    this.storage[key] = value;
    localStorage.setItem(key, value);
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  remove(key: string): void {
    key = `${AppConfig.guid}/${key}`;
    this.storage[key] = null;
    delete this.storage[key];
    localStorage.setItem(key, null);
    localStorage.removeItem(key);
  }
}
