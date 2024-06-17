import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { DirectorCardComponent } from './components/director-card/director-card.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { BackToPreviousPageDirective } from './directives/back-to-previous-page.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MovieCardComponent,
    DirectorCardComponent,
    CustomButtonComponent,
    BackToPreviousPageDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CustomButtonComponent,
    FormsModule,
    BackToPreviousPageDirective
  ]
})
export class SharedModule { }
