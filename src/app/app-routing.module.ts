import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'search', component: SearchPageComponent, canActivate: [AuthGuard]},
  {path: 'profile/:id', component: ProfilePageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
