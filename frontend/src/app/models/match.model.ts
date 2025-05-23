import {Team} from './team.model';

export interface Match {
  id: number;
  team1: Team;
  team2: Team;
  category: string;
  date_match: string;
  status: string;
  score_team1: number | null;
  score_team2: number | null;
  stadium: string;
}

export interface MatchAdd {
  team1: { id: number };
  team2: { id: number };
  category: string;
  date_match: string;
  status: string;
  score_team1: number | null;
  score_team2: number | null;
  stadium: string;
}

