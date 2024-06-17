import { Component, inject } from '@angular/core';
import { MovieCreationDTO } from '../../../../shared/models/types/movie-creation-DTO.type';
import { MovieService } from '../../../../shared/services/movie/movie.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-movie-page',
  templateUrl: './add-movie-page.component.html',
  styleUrl: './add-movie-page.component.scss',
})
export class AddMoviePageComponent {
  private _movieService = inject(MovieService);
  private _location = inject(Location);

  movie: MovieCreationDTO = {
    name: "",
    poster: '/assets/images/movie-poster/empty_portrait.webp',
    originalName: "",
    releaseYear: 0,
    length: 0,
    pitch: "",
    isSeen: false,
  };
  sendMovie(): void {
    this._movieService
      .addMovie(this.movie)
      .subscribe((response) => this._location.back());
  }
}
