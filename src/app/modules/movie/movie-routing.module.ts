import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/features/movie-list/movie-list.component';
import { MoviePageComponent } from './components/features/movie-page/movie-page.component';
import { AddMoviePageComponent } from './components/features/add-movie-page/add-movie-page.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"all",
    pathMatch: "full"
  },
  {
    path:"all",
    component: MovieListComponent
  },
  {
    path: "movie/:id",
    component: MoviePageComponent
  },
  {
    path: "add-movie",
    component: AddMoviePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
