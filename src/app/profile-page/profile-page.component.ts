import { UserService } from './../user.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profile } from '../profile';
import { AuthQuery } from '../auth-store/auth.query';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent implements OnInit {
  public islogged$ = new  BehaviorSubject(this.authQuery.isLoggedIn());
  public user$: Observable<Profile>;
  constructor(
    private route: ActivatedRoute,
    private authQuery: AuthQuery,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
   this.user$ = this.route.params
      .pipe(switchMap((params) => this.userService.detailProfile(params.id)));
  }

}
