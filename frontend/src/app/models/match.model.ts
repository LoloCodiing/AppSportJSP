export interface Match {
  id: number;
  team1_id: number;
  team2_id: number;
  category: string;
  date_match: string;
  status: string;
  score_team1: number | null;
  score_team2: number | null;
  stadium: string;
}
