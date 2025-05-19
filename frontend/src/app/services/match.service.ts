import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Match } from '../models/match.model';

@Injectable({ providedIn: 'root' })
export class MatchService {
  private apiUrl = 'http://localhost:8080/matches';

  constructor(private http: HttpClient) {}


  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.apiUrl}/all`);
  }

  getMatch(id: number): Observable<Match> {
    return this.http.get<Match>(`${this.apiUrl}/${id}`);
  }

  /*createMatch(match: Match,username: string, password: string): Observable<Match> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(`${username}:${password}`)
    });
    return this.http.post<Match>(`${this.apiUrl}/add`, match, { headers });
  }

  addScore(match: Match,username: string, password: string, id:number, isTeam1:boolean, scoreToAdd:number): Observable<Match> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(`${username}:${password}`)
    });
    return this.http.post<Match>(`${this.apiUrl}/?id=${id}&isTeam=${isTeam1}&scoreToAdd=${scoreToAdd}`, match, { headers });
  }
*/
  createMatch(match: Match): Observable<Match> {

    return this.http.post<Match>(`${this.apiUrl}/add`, match);
  }

  addScore(match: Match, id:number, isTeam1:boolean, scoreToAdd:number): Observable<Match> {
    return this.http.post<Match>(`${this.apiUrl}/?id=${id}&isTeam=${isTeam1}&scoreToAdd=${scoreToAdd}`, match);
  }
  updateMatch(id: number, match: Match): Observable<Match> {
    return this.http.put<Match>(`${this.apiUrl}/${id}`, match);
  }
}
