import { Component, inject, signal } from '@angular/core';
import { AppShellComponent } from '@core/layout/app-shell/app-shell-component';
import { ThemeService } from '@shared/utils/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [AppShellComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('forge-lab-web-app');
  protected readonly theme = inject(ThemeService);
}
