import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { Match } from '../../models/match.model';
import { Team } from '../../models/team.model';
import { TeamService } from '../../services/team.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  matches: Match[] = [];
  teams: Team[] = [];

  weeklyMatches: Match[] = [];
  upcomingMatches: Match[] = [];
  liveMatches: Match[] = [];
  finishedMatches: Match[] = [];
  filteredCategory: string = '';

  constructor(
    private matchService: MatchService,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    window.addEventListener('categoryChange', (e: any) => {
      this.setCategory(e.detail);
    });

    forkJoin({
      teams: this.teamService.getTeams(),
      matches: this.matchService.getMatches()
    }).subscribe(({ teams, matches }) => {
      this.teams = teams;
      this.matches = matches;
      this.updateMatchLists();
    });
  }


  updateMatchLists() {
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    this.weeklyMatches = this.matches.filter(m => {
      const matchDate = new Date(m.date_match);
      return m.status === 'Prévu' &&
        matchDate >= startOfWeek &&
        matchDate <= endOfWeek &&
        (!this.filteredCategory || m.category === this.filteredCategory);
    });

    this.upcomingMatches = this.matches.filter(m =>
      m.status === 'Prévu' &&
      new Date(m.date_match) &&
      (!this.filteredCategory || m.category === this.filteredCategory)
    );

    this.liveMatches = this.matches.filter(m =>
      m.status === 'En cours' &&
      (!this.filteredCategory || m.category === this.filteredCategory)
    );

    this.finishedMatches = this.matches.filter(m =>
      m.status === 'Terminé' &&
      (!this.filteredCategory || m.category === this.filteredCategory)
    );
  }

  setCategory(category: string) {
    this.filteredCategory = category;
    this.updateMatchLists();
  }



}
