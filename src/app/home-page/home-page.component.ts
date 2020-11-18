import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

  constructor( private auth: AuthService) {}

  ngOnInit(): void {}

  public login(): void {
    this.auth.githubSignin();
  }
}
