import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppButton } from './app-button';

describe('AppButton', () => {
  let component: AppButton;
  let fixture: ComponentFixture<AppButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppButton],
    }).compileComponents();

    fixture = TestBed.createComponent(AppButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the default variant and size', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    expect(button.classList).toContain('bg-primary');
    expect(button.classList).toContain('h-9');
    expect(button.type).toBe('button');
  });

  it('should apply the selected variant and size', () => {
    fixture.componentRef.setInput('variant', 'outline');
    fixture.componentRef.setInput('size', 'sm');
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    expect(button.classList).toContain('border-border');
    expect(button.classList).toContain('h-8');
  });

  it('should forward the disabled state to the native button', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    expect(button.disabled).toBe(true);
  });

  it('should apply additional classes and an accessible label', () => {
    fixture.componentRef.setInput('className', 'w-full');
    fixture.componentRef.setInput('aria-label', 'Save changes');
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    expect(button.classList).toContain('w-full');
    expect(button.getAttribute('aria-label')).toBe('Save changes');
  });
});
