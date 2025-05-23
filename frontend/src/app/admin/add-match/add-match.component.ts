import { Component, OnInit } from '@angular/core';
import { MatchAdd } from '../../models/match.model';
import { MatchService } from '../../services/match.service';
import { TeamService } from '../../services/team.service';
import { Team } from '../../models/team.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-match.component.html',
  styleUrl: './add-match.component.css'
})
export class AddMatchComponent implements OnInit {
  teams: Team[] = [];

  newMatch: MatchAdd = {
    team1: { id: 0 },
    team2: { id: 0 },
    category: '',
    date_match: '',
    status: 'Prévu',
    score_team1: null,
    score_team2: null,
    stadium: ''
  };

  constructor(
    private matchService: MatchService,
    private teamService: TeamService,
    private router: Router
  ) {}

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
    this.matchService.createMatch(this.newMatch).subscribe({
      next: () => {
        alert('Match créé avec succès');
        this.router.navigate(['/admin']);
      },
      error: (err) => {
        console.error(err);
        alert('Erreur lors de la création du match.');
      }
    });
  }
}
