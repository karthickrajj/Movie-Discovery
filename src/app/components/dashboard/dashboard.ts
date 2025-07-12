import { Component } from '@angular/core';
import { MovieService } from '../../services/movie-service';
import { CommonModule } from '@angular/common';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,MovieCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
movies:any = [];

  constructor(private movieService: MovieService) {}

  loadCategory(category: string) {
    this.movies = this.movieService.getMoviesByCategory(category);
  }
}
