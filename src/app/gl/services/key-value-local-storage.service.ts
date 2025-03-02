import { Injectable } from "@angular/core";
import { KeyValueStorage } from "../models/services";

@Injectable({
  providedIn: "root",
})
export class KeyValueLocalStorageService implements KeyValueStorage {
  get<T>(key: string): Promise<T | null> {
    const jsonText = localStorage.getItem(key);
    return Promise.resolve(JSON.parse(jsonText ?? "null"));
  }

  set<T>(key: string, value: T): Promise<void> {
    localStorage.setItem(key, JSON.stringify(value));
    return Promise.resolve();
  }

  remove(key: string): Promise<void> {
    localStorage.removeItem(key);
    return Promise.resolve();
  }

  constructor() {}
}
