import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Match, MatchAdd} from '../models/match.model';
import {AuthService} from '../auth.service';

@Injectable({ providedIn: 'root' })
export class MatchService {
  private apiUrl = 'http://localhost:8080/matches';

  constructor(private http: HttpClient, private authService: AuthService) {}


  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.apiUrl}/all`);
  }

  getMatch(id: number): Observable<Match> {
    return this.http.get<Match>(`${this.apiUrl}/${id}`);
  }

  createMatch(match: MatchAdd): Observable<Match> {

    return this.http.post<Match>(`${this.apiUrl}/add`, match);
  }

  // addScore(match: Match, id: number, isTeam1: boolean, scoreToAdd: number): Observable<Match> {
  //   const headers = this.authService.getAuthHeaders() ?? new HttpHeaders();
  //   return this.http.post<Match>(
  //     `${this.apiUrl}/?id=${id}&isTeam=${isTeam1}&scoreToAdd=${scoreToAdd}`,
  //     match,
  //     { headers }
  //   );
  // }
  updateMatch(id: number, match: MatchAdd): Observable<Match> {
    return this.http.put<Match>(`${this.apiUrl}/edit/${id}`, match);
  }
}
