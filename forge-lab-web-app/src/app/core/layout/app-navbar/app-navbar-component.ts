import { Component, inject } from '@angular/core';
import { ThemeService } from '@shared/utils/services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './app-navbar-component.html',
  styleUrl: './app-navbar-component.css',
})
export class AppNavbarComponent {
  readonly theme = inject(ThemeService);

  toggleTheme(): void {
    this.theme.toggle();
  }
}
