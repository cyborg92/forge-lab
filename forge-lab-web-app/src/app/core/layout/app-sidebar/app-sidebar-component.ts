import { NgClass } from '@angular/common';
import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass],
  templateUrl: './app-sidebar-component.html',
  styleUrl: './app-sidebar-component.css',
})
export class AppSidebarComponent {
  readonly isSidebarOpen = signal(true);

  toggleSidebar(): void {
    this.isSidebarOpen.update((isOpen) => !isOpen);
  }
}
