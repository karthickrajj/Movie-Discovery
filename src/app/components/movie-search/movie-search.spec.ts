import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieSearch } from './movie-search';
import { MovieService } from '../../services/movie-service';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MovieCard } from '../movie-card/movie-card';

describe('MovieSearch', () => {
  let component: MovieSearch;
  let fixture: ComponentFixture<MovieSearch>;
  let mockMovieService: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    mockMovieService = jasmine.createSpyObj('MovieService', ['searchMovies']);
    mockMovieService.searchMovies.and.returnValue([
      {
        id: 1,
        title: 'The Happy Times',
        release_date: '2021-07-12',
        vote_average: 7.8,
        poster_path: '/assets/happy-times.png',
        genre: '',
        overview: '',
        cast: [],
        similar: [],
        trailerUrl: "" 
      }
    ]);

    await TestBed.configureTestingModule({
      imports: [
        MovieSearch,       // standalone component
        MovieCard,         // standalone child component
        RouterTestingModule.withRoutes([]), // gives routerLink, ActivatedRoute
        FormsModule
      ],
      providers: [
        { provide: MovieService, useValue: mockMovieService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call search and update results', () => {
    component.query = 'Happy';
    component.search();
    expect(mockMovieService.searchMovies).toHaveBeenCalledWith('Happy');
    expect(component.results.length).toBe(1);
  });

  it('should render movie-card for each result', () => {
    component.query = 'Happy';
    component.search();
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('app-movie-card'));
    expect(cards.length).toBe(1);
  });
});
