import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieListComponent } from './components/features/movie-list/movie-list.component';
import { MoviePageComponent } from './components/features/movie-page/movie-page.component';
import { AddMoviePageComponent } from './components/features/add-movie-page/add-movie-page.component';


@NgModule({
  declarations: [
    MovieListComponent,
    MoviePageComponent,
    AddMoviePageComponent,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieModule { }
