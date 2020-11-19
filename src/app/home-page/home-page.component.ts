import { toBoolean } from '@datorama/akita';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthQuery } from '../auth-store/auth.query';
import { AuthService } from '../auth-store/auth.service';
import { User } from '../auth-store/auth.store';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  public islogged$ = new  BehaviorSubject(false) ;
  constructor(private authService: AuthService, private authQuery: AuthQuery) {}

  ngOnInit(): void {
  }

  public login(): void {
    this.authService.githubSignin().subscribe((res) => {
      this.islogged$.next(toBoolean(res));
    })
  }

  public logout(): void {
    this.authService.logout();
    this.islogged$.next(false);
  }
}
