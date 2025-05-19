import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private username: string | null = null;
  private password: string | null = null;

  login(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  logout() {
    this.username = null;
    this.password = null;
  }

  getAuthHeaders(): HttpHeaders | null {
    if (this.username && this.password) {
      return new HttpHeaders({
        'Authorization': 'Basic ' + btoa(`${this.username}:${this.password}`)
      });
    }
    return null;
  }

  isLoggedIn(): boolean {
    return this.username !== null && this.password !== null;
  }
}
