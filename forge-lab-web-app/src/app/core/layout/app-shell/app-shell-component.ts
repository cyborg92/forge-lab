import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppNavbarComponent} from '../app-navbar/app-navbar-component';
import {AppSidebarComponent} from '../app-sidebar/app-sidebar-component';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, AppNavbarComponent, AppSidebarComponent],
  templateUrl: './app-shell-component.html',
  styleUrl: './app-shell-component.css',
})
export class AppShellComponent {}
