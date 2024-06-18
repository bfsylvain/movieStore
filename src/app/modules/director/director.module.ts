import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorRoutingModule } from './director-routing.module';
import { DirectorListComponent } from './components/features/director-list/director-list.component';
import { DirectorPageComponent } from './components/features/director-page/director-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DirectorListComponent,
    DirectorPageComponent
  ],
  imports: [
    CommonModule,
    DirectorRoutingModule,
    SharedModule
  ]
})
export class DirectorModule { }
