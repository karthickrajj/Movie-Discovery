import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCard } from './movie-card';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('MovieCard', () => {
  let component: MovieCard;
  let fixture: ComponentFixture<MovieCard>;

 beforeEach(async () => {
    await TestBed.configureTestingModule({
  imports: [
    MovieCard,
    RouterTestingModule.withRoutes([]) // so routerLink is available
  ]
}).compileComponents();

    fixture = TestBed.createComponent(MovieCard);
    component = fixture.componentInstance;
    component.movie = {
      id: 1,
      title: 'The Happy Times',
      release_date: '2021-07-12',
      vote_average: 7.8,
      poster_path: '/assets/happy-times.png'
    };
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display movie title in template', () => {
    const titleEl = fixture.debugElement.query(By.css('.card-title')).nativeElement;
    expect(titleEl.textContent).toContain('The Happy Times');
  });

  it('should have router link element', () => {
  const link = fixture.nativeElement.querySelector('a');
  expect(link?.textContent?.toLowerCase()).toContain('view');
});
});
