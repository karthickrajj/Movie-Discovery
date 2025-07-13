import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-card.html',
  styleUrls: ['./movie-card.css']
})
export class MovieCard {
  @Input() movie: any;
}
