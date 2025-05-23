import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './authentification/auth.guard';
import {AdminHomeComponent} from './admin/admin-home/admin-home.component';
import {AddMatchComponent} from './admin/add-match/add-match.component';
import {EditMatchComponent} from './admin/edit-match/edit-match.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'match/:id', component: MatchDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminHomeComponent, canActivate: [AuthGuard] },
  { path: 'admin/add-match', component: AddMatchComponent, canActivate:[AuthGuard] },
  { path: 'admin/edit/:id', component: EditMatchComponent }


];

