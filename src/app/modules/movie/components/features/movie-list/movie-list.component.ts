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
    // this.movieService.getAllMovies$().subscribe()
    this._movieService.fetchMovies$()
    .pipe(takeUntilDestroyed(this._destroyRef))
    .subscribe()
  }

  DisplayAllMovies(): void {
    this._movieService.getAllMovies()
    // this.movieService.getAllMovies$().subscribe()
  }

  DisplayWatchedMovies(): void {
    this._movieService.getWatchedMovies()
    // this.movieService.getWatchedMovies$().subscribe()
  }

  DisplayNotWatchedMovies(): void {
    this._movieService.getnotWatchedMovies()
    // this.movieService.getNotWatchedMovies$().subscribe()
  }

  redirect(): void {
    this._router.navigateByUrl("movies/add-movie")
  }
}
