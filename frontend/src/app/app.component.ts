import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  categories = ['TOP 14', 'PRO D2', 'Nationale', 'Nationale 2', 'Fédérale 1', 'Fédérale 2', 'Fédérale 3', 'Régionale 1', 'Régionale 2', 'Régionale 3']; // ou dynamiquement plus tard

  constructor() {}

  onCategorySelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    window.dispatchEvent(new CustomEvent('categoryChange', { detail: value }));
  }

}
