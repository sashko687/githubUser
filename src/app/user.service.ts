import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from './profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUsersProfile(searchString: string): Observable<any> {
    return this.http.get(
      `https://api.github.com/search/users?per_page=10&q=` + searchString
    );
  }

  public detailProfile(userName: string): Observable<Profile> {
    return this.http.get(
      `https://api.github.com/users/` + userName
    );
  }
}
