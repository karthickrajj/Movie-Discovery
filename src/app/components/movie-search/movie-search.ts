import { Component } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { CommonModule } from '@angular/common';
import { MovieCard } from '../movie-card/movie-card';
import { MovieDetails } from '../movie-details/movie-details';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-search',
  imports: [CommonModule,MovieCard,FormsModule],
  templateUrl: './movie-search.html',
  styleUrl: './movie-search.css'
})
export class MovieSearch {
  query = '';
  results:any = [];

  constructor(private movieService: MovieService) {}

  search() {
    debugger;
    this.results = this.movieService.searchMovies(this.query);
    console.log('resultsss',this.results)
  }

}
