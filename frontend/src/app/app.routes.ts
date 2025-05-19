import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import {LoginComponent} from './components/login/login.component';
import {AdminComponent} from './components/admin/admin.component';
import {AuthGuard} from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'match/:id', component: MatchDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },


];

