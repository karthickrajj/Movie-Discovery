import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieCard } from './movie-card';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';

describe('MovieCard', () => {
  let component: MovieCard;
  let fixture: ComponentFixture<MovieCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MovieCard,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCard);
    component = fixture.componentInstance;
    component.movie = {
      id: 1,
      title: 'The Happy Times',
      release_date: '2021-07-12',
      vote_average: 7.8,
      poster_path: '/assets/happy-times.png',
      overview: 'Some overview'
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

  it('should have a router link element with /movie/:id', () => {
  const linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
  expect(linkDes.length).toBeGreaterThan(0);

  const routerLinkInstance = linkDes[0].injector.get(RouterLinkWithHref);
  expect(routerLinkInstance.href).toContain('/movie/1');
});
});
