import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { AuthStore, AuthState } from './auth.store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthQuery extends Query<AuthState> {
  public isLoggedIn$: Observable<boolean> = this.select(({ user }) =>
    toBoolean(user?.uid)
  );

  constructor(protected store: AuthStore) {
    super(store);
  }

  public isLoggedIn(): boolean {
    return toBoolean(this.getValue().user);
  }

  public getToken(): string {
    return this.getValue().user?.uid;
  }
}
