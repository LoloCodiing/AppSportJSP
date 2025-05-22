import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(

      (user) => {
        console.log(this.email, this.password);
        console.log("admin")
        if (user && user.role === 'admin') {
          console.log("admin 2")
          this.router.navigate(['/admin']);
        } else {
          this.errorMessage = 'Accès refusé : vous n’êtes pas admin.';
        }
      },
      (error) => {
        this.errorMessage = 'Email ou mot de passe incorrect';
      }
    );
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
