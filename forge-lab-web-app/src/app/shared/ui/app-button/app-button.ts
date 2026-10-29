import { Component, computed, input, EventEmitter, Output } from '@angular/core';

/** Visual styles supported by the shared button. */
export type ButtonVariant =
  'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'sidebar';

/** Preset button dimensions supported by the shared button. */
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

// Shared Tailwind utilities; variant and size classes are added below.
const baseClasses =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive';

// Keep complete Tailwind class names here so Tailwind can detect and generate them.
const variantClasses: Record<ButtonVariant, string> = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive:
    'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20',
  outline:
    'border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
  sidebar: 'text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground',
};

const sizeClasses: Record<ButtonSize, string> = {
  default: 'h-9 px-4 py-2 has-[>svg]:px-3',
  sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
  lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
  icon: 'size-9 rounded-md',
};

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './app-button.html',
  styleUrl: './app-button.css',
})
/**
 * Reusable native button with Tailwind variants, sizes, and content projection.
 *
 * Example: `<app-button variant="outline" size="sm" (clicked)="save($event)">Save</app-button>`.
 */
export class AppButton {
  /** Signal inputs let the parent configure the button; each input has a default. */
  readonly variant = input<ButtonVariant>('default');
  readonly size = input<ButtonSize>('default');
  readonly type = input<'button' | 'submit' | 'reset'>('button');
  readonly disabled = input(false);
  readonly className = input('');
  readonly ariaLabel = input<string | null>(null, { alias: 'aria-label' });
  readonly ariaExpanded = input<boolean | null>(null, { alias: 'aria-expanded' });

  /**
   * Derived signal: Angular tracks the input signals read here and recalculates
   * the class string only when one of them changes.
   */
  readonly buttonClasses = computed(
    () =>
      `${baseClasses} ${variantClasses[this.variant()]} ${sizeClasses[this.size()]} ${this.className()}`,
  );

  /** Emits the native click event so the parent can handle the action. */
  @Output() readonly clicked = new EventEmitter<MouseEvent>();

  /**
   * Forwards the native click event through the component output.
   * @param event Native click event from the button element.
   */
  click(event: MouseEvent): void {
    this.clicked.emit(event);
  }
}
