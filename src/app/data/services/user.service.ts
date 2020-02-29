import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { LocastorageService } from '../../core/locastorage.service';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private localStorage: LocastorageService) { }
  
  public saveUser(user: User): Observable<void> {
    return of(this.localStorage.saveInLocal('user', user));
  }

  public getUser(): Observable<User> {
    return of(this.localStorage.getFromLocal('user'));
  }

  public validUser(): boolean {
    return !!this.localStorage.getFromLocal('user');
  }
}
