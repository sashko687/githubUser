import { UserService } from './../user.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profile } from '../profile';
import { debounceTime, map } from 'rxjs/operators';
import { toBoolean } from '@datorama/akita';
import { AuthService } from '../auth-store/auth.service';
import { AuthQuery } from '../auth-store/auth.query';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent implements OnInit {
  public showData: string;
  public displayedColumns: string[] = ['login', 'html_url', 'detail'];
  public searchString: string;
  public users$: Observable<Profile>;
  constructor(private userService: UserService,
    ) {}

  ngOnInit(): void {
  this.showData = '1';
  }

  public applySearch(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.users$ = this.userService.getUsersProfile(filterValue).pipe(
      debounceTime(700),
      map((res) => res.items)
    );
  }

}
