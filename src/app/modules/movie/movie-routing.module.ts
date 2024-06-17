import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/features/movie-list/movie-list.component';
import { MoviePageComponent } from './components/features/movie-page/movie-page.component';
import { AddMoviePageComponent } from './components/features/add-movie-page/add-movie-page.component';
import { MovieHomePageComponent } from './components/movie-home-page/movie-home-page.component';
import { MoviesToWatchComponent } from './components/features/movies-to-watch/movies-to-watch.component';
import { SeenMoviesComponent } from './components/features/seen-movies/seen-movies.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: MovieHomePageComponent,
    children: [
      {
        path: "",
        redirectTo: "all",
        pathMatch: "full"
      },
      {
        path:"all",
        component: MovieListComponent
      },
      {
        path: "to-watch",
        component: MoviesToWatchComponent
      },
      {
        path: "seen",
        component: SeenMoviesComponent
      },
      {
        path: "movie/:id",
        component: MoviePageComponent
      },
      {
        path: "add-movie",
        component: AddMoviePageComponent
      }    
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
