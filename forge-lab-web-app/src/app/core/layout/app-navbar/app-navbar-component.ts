import { Component, inject } from '@angular/core';
import { UtilsService } from '@shared/utils/services/utils.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './app-navbar-component.html',
  styleUrl: './app-navbar-component.css',
})
export class AppNavbarComponent {
  readonly utilsService = inject(UtilsService);

  toggleTheme(): void {
    this.utilsService.toggle();
  }
}
