import { Injectable, Inject, InjectionToken } from '@angular/core';
import { StorageService } from 'ngx-webstorage-service';

export const MY_LOCAL_STORAGE =
    new InjectionToken<StorageService>('MY_LCOAL_STORAGE');

@Injectable()
export class LocastorageService {

  constructor(@Inject(MY_LOCAL_STORAGE) private localStorage: StorageService) { }

  public saveInLocal(key, value) {
    this.localStorage.set(key, value);
  }

  public getFromLocal(key) {
    return this.localStorage.get(key);
  }
}
