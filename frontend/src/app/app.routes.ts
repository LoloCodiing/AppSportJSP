import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'match/:id', component: MatchDetailsComponent }
];

