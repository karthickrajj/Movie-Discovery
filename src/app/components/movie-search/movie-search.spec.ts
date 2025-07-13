import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieSearch } from './movie-search';
import { MovieService } from '../../services/movie-service';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MovieCard } from '../movie-card/movie-card';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieSearch Component', () => {
  let component: MovieSearch;
  let fixture: ComponentFixture<MovieSearch>;
  let mockMovieService: jasmine.SpyObj<MovieService>;

  beforeEach(async () => {
    mockMovieService = jasmine.createSpyObj('MovieService', ['searchMovies']);
    mockMovieService.searchMovies.and.returnValue(of([
      { 
        id: 1, 
        title: 'Happy', 
        overview: 'Test movie', 
        poster_path: '/happy-times.png' 
      }
    ]));

    await TestBed.configureTestingModule({
      imports: [
        MovieSearch,
        MovieCard,
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule
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

  it('should call searchMovies and update searchResults', () => {
    component.query = 'Happy';
    component.search();

    expect(mockMovieService.searchMovies).toHaveBeenCalledWith('Happy');
    expect(component.searchResults.length).toBe(1);
    expect(component.searchResults[0].title).toBe('Happy');
  });

  it('should render movie-card for each search result', () => {
    component.query = 'Happy';
    component.search();
    fixture.detectChanges();

    const cards = fixture.debugElement.queryAll(By.css('app-movie-card'));
    expect(cards.length).toBe(1);
  });
});
