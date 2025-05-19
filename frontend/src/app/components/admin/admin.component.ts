import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatchService} from '../../services/match.service';
import {TeamService} from '../../services/team.service';
import {MatchAdd} from '../../models/match.model';
import {Team} from '../../models/team.model';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  match: MatchAdd = {
    team1: 0,
    team2: 0,
    category: '',
    date_match: '',
    status: '',
    score_team1: null,
    score_team2: null,
    stadium: '',
  };

  teams: Team[] = [];

  constructor(private matchService: MatchService, private teamService:TeamService) {}

  ngOnInit() {
    this.loadTeams();
  }

  loadTeams() {
    this.teamService.getTeams().subscribe({
      next: (data) => (this.teams = data),
      error: (err) => console.error('Erreur lors du chargement des équipes :', err),
    });
  }

  onSubmit() {
    this.matchService.createMatch(this.match).subscribe({
      next: () => alert('Match ajouté avec succès !'),
      error: (err) => {
        console.error('Erreur lors de la création du match :', err);
        alert('Erreur lors de la création du match');
      },
    });
  }
}
