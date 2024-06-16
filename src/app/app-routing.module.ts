import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home-page/components/features/home-page/home-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "movies",
    loadChildren: ()=> import ("./modules/movie/movie.module")
    .then(m => m.MovieModule)
  },
  {
    path: "directors",
    loadChildren: ()=> import("./modules/director/director.module")
    .then(m => m.DirectorModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
