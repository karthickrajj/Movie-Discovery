import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie-service';
import { MOVIES } from '../data';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });

    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // ensures no outstanding HTTP calls
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should search movies by title', (done) => {
    const mockResponse = {
      results: [
        { id: 1, title: 'Happy Movie' }
      ]
    };

    service.searchMovies('Happy').subscribe(results => {
      expect(results).toBeTruthy();
      expect(results.length).toBe(1);
      expect(results[0].title).toBe('Happy Movie');
      done();
    });

    const req = httpMock.expectOne(
      r => r.url.includes('/search/movie') && r.method === 'GET'
    );
    expect(req.request.params.get('query')).toBe('Happy');
    req.flush(mockResponse);
  });

  it('should get movies by category', (done) => {
    const mockResponse = {
      results: [
        { id: 2, title: 'Action Blast' }
      ]
    };

    service.getMoviesByCategory('Action Fix').subscribe(results => {
      expect(results).toBeTruthy();
      expect(results.length).toBe(1);
      expect(results[0].title).toBe('Action Blast');
      done();
    });

    const req = httpMock.expectOne(
      r => r.url.includes('/discover/movie') && r.url.includes('with_genres=28')
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should get movie by ID', (done) => {
    const mockMovie = { id: 5, title: 'Specific Movie' };

    service.getMovieById(5).subscribe(result => {
      expect(result).toBeTruthy();
      expect(result.id).toBe(5);
      expect(result.title).toBe('Specific Movie');
      done();
    });

    const req = httpMock.expectOne(
      r => r.url.endsWith('/movie/5')
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockMovie);
  });

  it('should get similar movies', (done) => {
    const mockResponse = {
      results: [
        { id: 6, title: 'Similar Movie 1' },
        { id: 7, title: 'Similar Movie 2' }
      ]
    };

    service.getSimilarMovies(5).subscribe(results => {
      expect(results).toBeTruthy();
      expect(results.length).toBe(2);
      expect(results[0].title).toContain('Similar');
      done();
    });

    const req = httpMock.expectOne(
      r => r.url.includes('/movie/5/similar')
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should get local movie by id', () => {
    // fallback test: checks your local MOVIES array
    const localMovie = service.getLocalMovieById(MOVIES[0].id);
    expect(localMovie?.id).toBe(MOVIES[0].id);
  });

  it('should get local similar movies by ids', () => {
    const ids = MOVIES.slice(0, 2).map(m => m.id); // pick first 2 ids
    const similarMovies = service.getLocalSimilarMovies(ids);

    expect(similarMovies.length).toBeGreaterThan(0);
    expect(similarMovies.some(m => ids.includes(m.id))).toBeTrue();
  });
});
