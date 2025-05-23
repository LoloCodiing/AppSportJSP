import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatchService } from '../../services/match.service';
import { TeamService } from '../../services/team.service';
import { MatchAdd } from '../../models/match.model';
import { Team } from '../../models/team.model';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-match',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    RouterModule
  ],
  templateUrl: './edit-match.component.html',
  styleUrl: './edit-match.component.css'
})
export class EditMatchComponent implements OnInit {
  matchId!: number;
  match!: MatchAdd;
  teams: Team[] = [];

  selectedTeam1Id!: number;
  selectedTeam2Id!: number;

  constructor(
    private route: ActivatedRoute,
    private matchService: MatchService,
    private teamService: TeamService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.matchId = +this.route.snapshot.paramMap.get('id')!;
    this.loadTeams();
    this.loadMatch();
  }

  loadTeams() {
    this.teamService.getTeams().subscribe({
      next: (data) => this.teams = data,
      error: (err) => console.error('Erreur chargement équipes:', err)
    });
  }

  loadMatch() {
    this.matchService.getMatch(this.matchId).subscribe({
      next: (data) => {
        this.match = data;
        this.selectedTeam1Id = data.team1.id;
        this.selectedTeam2Id = data.team2.id;
      },
      error: (err) => console.error('Erreur chargement match:', err)
    });
  }

  onSubmit(): void {
    // Remplacer team1 et team2 par les objets Team complets
    const team1Full = this.teams.find(t => t.id === +this.selectedTeam1Id);
    const team2Full = this.teams.find(t => t.id === +this.selectedTeam2Id);

    if (!team1Full || !team2Full) {
      console.error('Équipes non valides.');
      return;
    }

    const updatedMatch: MatchAdd = {
      ...this.match,
      team1: { id: team1Full.id },
      team2: { id: team2Full.id },
    };

    this.matchService.updateMatch(this.matchId, updatedMatch).subscribe({
      next: () => this.router.navigate(['/admin']),
      error: (err) => console.error('Erreur mise à jour match:', err)
    });
  }
}
