import { Component } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { CommonModule } from '@angular/common';
import { MovieCard } from '../movie-card/movie-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [CommonModule, MovieCard, FormsModule],
  templateUrl: './movie-search.html',
  styleUrl: './movie-search.css'
})
export class MovieSearch {
  query = '';
  searchResults: any[] = [];

  constructor(private movieService: MovieService) {}

  search() {
    if (!this.query.trim()) return;
    this.movieService.searchMovies(this.query).subscribe(results => {
      this.searchResults = results;
      console.log('API search results:', results);
    });
  }
}
