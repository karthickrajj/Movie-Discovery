import { Injectable } from '@angular/core';
import { MOVIES } from '../data';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies = MOVIES;

  getMoviesByCategory(category: string) {
    return this.movies.filter(m => m.genre === category);
  }

  searchMovies(query: string) {
    query = query.toLowerCase();
    return this.movies.filter(m =>
      m.title.toLowerCase().includes(query) ||
      m.cast.some(actor => actor.toLowerCase().includes(query))
    );
  }

  getMovieById(id: number) {
    return this.movies.find(m => m.id === id);
  }

  getSimilarMovies(similarIds: number[]) {
    return this.movies.filter(m => similarIds.includes(m.id));
  }
}
