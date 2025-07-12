import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { RouterTestingModule } from '@angular/router/testing';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        App, // your standalone App component
        RouterTestingModule // to handle routerLink and router-outlet
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

it('should render header', () => {
  const fixture = TestBed.createComponent(App);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  const content = compiled.textContent?.toLowerCase() || '';
  expect(content).toContain('movietime');
});
});
