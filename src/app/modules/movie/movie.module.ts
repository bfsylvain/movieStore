import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieListComponent } from './components/features/movie-list/movie-list.component';
import { MoviePageComponent } from './components/features/movie-page/movie-page.component';
import { AddMoviePageComponent } from './components/features/add-movie-page/add-movie-page.component';
import { MovieHomePageComponent } from './components/movie-home-page/movie-home-page.component';
import { SeenMoviesComponent } from './components/features/seen-movies/seen-movies.component';
import { MoviesToWatchComponent } from './components/features/movies-to-watch/movies-to-watch.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MovieListComponent,
    MoviePageComponent,
    AddMoviePageComponent,
    MovieHomePageComponent,
    SeenMoviesComponent,
    MoviesToWatchComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule
  ]
})
export class MovieModule { }
