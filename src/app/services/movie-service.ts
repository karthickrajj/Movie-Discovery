import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MOVIES } from '../data';
import { Movie } from '../data';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  // 🔥 Local fallback
  movies = MOVIES;

  // 🔥 GET by Category (still from local for demo)
  // getMoviesByCategory(category: string): Observable<Movie[]> {
  //   return of(this.movies.filter(m => m.genre === category));
  // }
  getMoviesByCategory(category: string) {
  // simple mapping - adjust these IDs as needed from TMDB genre list
  const genreMap: { [key: string]: number } = {
    'Feel Good': 35,     // Comedy
    'Action Fix': 28,     // Action
    'Mind Benders': 9648  // Mystery
  };
  const genreId = genreMap[category];

  return this.http.get<any>(`${environment.apiUrl}/discover/movie?with_genres=${genreId}`)
    .pipe(map(response => response.results));
}

  // 🔥 SEARCH from TMDB API
  searchMovies(query: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/search/movie`, {
      params: { query }
    }).pipe(
      map(res => res.results)
    );
  }

  // 🔥 GET Movie Details by ID
  getMovieById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/movie/${id}`);
  }

  // 🔥 GET Similar Movies by Movie ID
  getSimilarMovies(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/movie/${id}/similar`).pipe(
      map(res => res.results)
    );
  }

  // 🔥 If you want fallback local by ID
  getLocalMovieById(id: number): Movie | undefined {
    return this.movies.find(m => m.id === id);
  }

  // 🔥 If you want fallback local for similar
  getLocalSimilarMovies(similarIds: number[]): Movie[] {
    return this.movies.filter(m => similarIds.includes(m.id));
  }
}
