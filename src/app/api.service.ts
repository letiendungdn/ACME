import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor() {}
  validateUsername(username: string): Observable<boolean> {
    console.log(`Trigger Api call ${username}`);
    let existedUsers = ['abc', 'xyz', 'xy'];
    let isValid = existedUsers.every((x) => x !== username);
    return of(isValid).pipe(delay(1000));
  }
}
