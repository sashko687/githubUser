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
    console.log('hitting github with username: ' + searchString);
    return this.http.get(
      `https://api.github.com/search/users?per_page=10&q=` + searchString
    );
  }

  public detailProfile(userName: any): Observable<any> {
    console.log('hitting github with username: ' + userName);
    return this.http.get(
      `https://api.github.com/users/` + userName
    );
  }
}
