import { Injectable } from '@angular/core';
import { resetStores, Store, StoreConfig } from '@datorama/akita';

export interface User {
  uid: string;
}

export interface AuthState {
  user: User | null;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super({ user: null });
  }

  public login(user: User): void {
    this.update({ user });
  }

  public logout(): void {
    resetStores();
  }
}
