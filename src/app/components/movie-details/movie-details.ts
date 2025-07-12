import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  selector: 'app-movie-details',
  imports: [FormsModule,CommonModule,MovieCard],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css'
})
export class MovieDetails {
movie: any;
  similarMovies: any[] = [];

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.getMovieById(id);
    console.log('movieee',this.movie)
    if (this.movie) {
      this.similarMovies = this.movieService.getSimilarMovies(this.movie.similar);
    }
  }
}
