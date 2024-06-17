import { Component, DestroyRef, Inject, inject } from '@angular/core';
import { MovieService } from '../../../../shared/services/movie/movie.service';
import { Observable } from 'rxjs';
import { MovieShortDTO } from '../../../../shared/models/types/movie-short-DTO.type';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {

  private _movieService = inject(MovieService)
  private _router = inject(Router)
  private _destroyRef: DestroyRef = inject(DestroyRef)

  movieList$: Observable<MovieShortDTO[]> = this._movieService.getMovieList$()

  ngOnInit(): void {
    this._movieService.getAllMovies$()
    .pipe(takeUntilDestroyed(this._destroyRef))
    .subscribe()
  }

  goToMoviePage(movieId: number): void {
    this._router.navigate([`movies/home/movie/${movieId}`])
  }

  deleteMovie(id: number) {
    this._movieService.deleteMovie(id)
  }
}
