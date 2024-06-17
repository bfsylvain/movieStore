import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { DirectorCardComponent } from './components/director-card/director-card.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';



@NgModule({
  declarations: [
    MovieCardComponent,
    DirectorCardComponent,
    CustomButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CustomButtonComponent
  ]
})
export class SharedModule { }
