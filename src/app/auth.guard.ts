import { AuthService } from './auth-store/auth.service';
import { AuthStore } from './auth-store/auth.store';
import { IfStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthQuery } from './auth-store/auth.query';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authQuery: AuthQuery, private router: Router, private authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authQuery.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/']);
      this.authService.logout();
    }
  }
}
