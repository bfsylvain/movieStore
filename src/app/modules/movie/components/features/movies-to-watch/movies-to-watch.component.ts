import { Component, DestroyRef, inject } from '@angular/core';
import { MovieService } from '../../../../shared/services/movie/movie.service';
import { Observable } from 'rxjs';
import { MovieShortDTO } from '../../../../shared/models/types/movie-short-DTO.type';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-movies-to-watch',
  templateUrl: './movies-to-watch.component.html',
  styleUrl: './movies-to-watch.component.scss'
})
export class MoviesToWatchComponent {

  private _movieService = inject(MovieService)
  private _destroyRef: DestroyRef = inject(DestroyRef)

  movieList$: Observable<MovieShortDTO[]> = this._movieService.getNotSeenMovieList$()

  ngOnInit(): void {
    this._movieService.getNotSeenMovies$()
    .pipe(takeUntilDestroyed(this._destroyRef))
    .subscribe()
  }
}
