import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorListComponent } from './components/features/director-list/director-list.component';
import { DirectorPageComponent } from './components/features/director-page/director-page.component';

const routes: Routes = [
  {
    path: "",
    redirectTo:"all",
    pathMatch: "full"
  },
  {
    path:"all",
    component: DirectorListComponent
  },
  {
    path: "director/:id",
    component:DirectorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorRoutingModule { }
