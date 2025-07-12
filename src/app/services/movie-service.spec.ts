import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie-service';

describe('MovieService', () => {
   let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return matching movies for search', () => {
    const results = service.searchMovies('Happy');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].title).toContain('Happy');
  });
});
