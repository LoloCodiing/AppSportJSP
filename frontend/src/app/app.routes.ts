import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import {AdminComponent} from './components/admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './authentification/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'match/:id', component: MatchDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];

