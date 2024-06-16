import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorRoutingModule } from './director-routing.module';
import { DirectorListComponent } from './components/features/director-list/director-list.component';
import { DirectorPageComponent } from './components/features/director-page/director-page.component';


@NgModule({
  declarations: [
    DirectorListComponent,
    DirectorPageComponent
  ],
  imports: [
    CommonModule,
    DirectorRoutingModule
  ]
})
export class DirectorModule { }
