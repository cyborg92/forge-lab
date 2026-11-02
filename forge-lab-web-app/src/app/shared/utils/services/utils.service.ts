import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilsService {
  
  /**
   * Indicates whether dark mode is enabled.
   */
  readonly isDark = signal(true);

  /** */
  readonly isOnline=signal(navigator.onLine);
  /**
   * Toggles the dark mode state.
   */
  toggle(): void {
    this.isDark.update((isDark) => !isDark);
  }
}
