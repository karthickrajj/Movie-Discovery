import { provideRouter, Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { MovieSearch } from './components/movie-search/movie-search';
import { MovieDetails } from './components/movie-details/movie-details';


export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'search', component: MovieSearch },
  { path: 'movie/:id', component: MovieDetails },
  
];

export const appRouter = provideRouter(routes);
