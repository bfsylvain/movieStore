import { Component, DestroyRef, inject } from '@angular/core';
import { MovieService } from '../../../../shared/services/movie/movie.service';
import { MovieShortDTO } from '../../../../shared/models/types/movie-short-DTO.type';
import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seen-movies',
  templateUrl: './seen-movies.component.html',
  styleUrl: './seen-movies.component.scss'
})
export class SeenMoviesComponent {

  private _movieService = inject(MovieService)
  private _destroyRef: DestroyRef = inject(DestroyRef)
  private _router = inject(Router)

  movieList$: Observable<MovieShortDTO[]> = this._movieService.getWatchedMovieList$()

  ngOnInit(): void {
    this._movieService.getWatchedMovies$()
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
