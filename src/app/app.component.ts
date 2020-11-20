import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { toBoolean } from '@datorama/akita';
import { BehaviorSubject } from 'rxjs';
import { AuthQuery } from './auth-store/auth.query';
import { AuthService } from './auth-store/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'githubUser';
  public islogged$ = new BehaviorSubject(this.authQuery.isLoggedIn());
  constructor(
    private authService: AuthService,
    private authQuery: AuthQuery,
    private router: Router
  ) {}

  public login(): void {
    this.authService.githubSignin().subscribe((res) => {
      this.islogged$.next(toBoolean(res));
    });
  }

  public logout(): void {
    this.authService.logout();
    this.islogged$.next(this.authQuery.isLoggedIn());
    this.router.navigate(['/']);
  }
}
