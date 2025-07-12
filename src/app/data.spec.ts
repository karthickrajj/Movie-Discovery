import { MOVIES } from './data';

describe('MOVIES data', () => {
  it('should have at least one movie', () => {
    expect(MOVIES.length).toBeGreaterThan(0);
  });

  it('should have correct structure for a movie', () => {
    const movie = MOVIES[0];
    expect(movie).toEqual(jasmine.objectContaining({
      id: jasmine.any(Number),
      title: jasmine.any(String),
      release_date: jasmine.any(String),
      vote_average: jasmine.any(Number),
      poster_path: jasmine.any(String),
      overview: jasmine.any(String)
    }));
  });
});
