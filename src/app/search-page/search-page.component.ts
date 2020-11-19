import { UserService } from './../user.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from '../profile';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent implements OnInit {
  public displayedColumns: string[] = ['login', 'html_url', 'detail'];
  public searchString: string;
  public users$ = new BehaviorSubject<Profile[]>([]);
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  public applySearch(event: Event): void {
    setTimeout(() => {
      const filterValue = (event.target as HTMLInputElement).value;
      this.userService
        .getUsersProfile(filterValue)
        .subscribe((res) => this.users$.next(res.items));
    }, 1000);
  }
}
