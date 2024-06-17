import { DestroyRef, Injectable, inject } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, switchMap, tap } from 'rxjs';
import { MovieShortDTO } from '../../models/types/movie-short-DTO.type';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MovieDTO } from '../../models/types/movie-DTO.type';
import { MovieCreationDTO } from '../../models/types/movie-creation-DTO.type';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _http = inject(HttpClient);
  private _destroyRef: DestroyRef = inject(DestroyRef);
  private readonly _BASE_URL = environment.baseUrl + '/movies';

  private allMovieList: MovieShortDTO[] = [];
  private notSeenMovieList: MovieShortDTO[] = [];
  private watchedMovieList: MovieShortDTO[] = [];
  private movies$: BehaviorSubject<MovieShortDTO[]> = new BehaviorSubject(
    [] as MovieShortDTO[]
  );
  private notSeenMovies$: BehaviorSubject<MovieShortDTO[]> =
    new BehaviorSubject([] as MovieShortDTO[]);
  private watchedMovies$: BehaviorSubject<MovieShortDTO[]> =
    new BehaviorSubject([] as MovieShortDTO[]);
  constructor() {}

  getAllMovies$(): Observable<MovieShortDTO[]> {
    return this._http.get<MovieShortDTO[]>(this._BASE_URL + '/get/all').pipe(
      tap((response) => {
        this.allMovieList = response;
        this.movies$.next(response);
      })
    );
  }

  getWatchedMovies$(): Observable<MovieShortDTO[]> {
    return this._http
      .get<MovieShortDTO[]>(this._BASE_URL + '/get/watched')
      .pipe(
        tap((result) => {
          this.watchedMovieList = result;
          this.watchedMovies$.next(result);
        })
      );
  }

  getNotSeenMovies$(): Observable<MovieShortDTO[]> {
    return this._http
      .get<MovieShortDTO[]>(this._BASE_URL + '/get/not-watched')
      .pipe(
        tap((result) => {
          this.notSeenMovieList = result;
          this.notSeenMovies$.next(result);
        })
      );
  }

  getMovieList$(): Observable<MovieShortDTO[]> {
    return this.movies$.asObservable();
  }

  getMovieById(movieId: number): Observable<MovieDTO> {
    return this._http.get<MovieDTO>(this._BASE_URL + `/get/${movieId}`);
  }

  getNotSeenMovieList$(): Observable<MovieShortDTO[]> {
    return this.notSeenMovies$.asObservable();
  }

  getWatchedMovieList$(): Observable<MovieShortDTO[]> {
    return this.watchedMovies$.asObservable();
  }

  deleteMovie(id: number): void {
    this.allMovieList = this.allMovieList.filter((movie) => movie.id !== id);
    this.movies$.next(this.allMovieList);
    this.watchedMovieList = this.watchedMovieList.filter(
      (movie) => movie.id !== id
    );
    this.watchedMovies$.next(this.watchedMovieList);
    this.notSeenMovieList = this.notSeenMovieList.filter(
      (movie) => movie.id !== id
    );
    this.notSeenMovies$.next(this.notSeenMovieList);
    this._http
      .delete(this._BASE_URL + `/delete/${id}`)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe();
  }

  commentSeenMovie(
    movieId: number,
    commentAndSeen: object
  ): Observable<MovieShortDTO> {
    return this._http.patch<MovieShortDTO>(
      this._BASE_URL + `/update/${movieId}`,
      commentAndSeen
    );
  }

  addMovie(movie: MovieCreationDTO): Observable<MovieShortDTO> {
    return this._http.post<MovieShortDTO>(this._BASE_URL + '/add', movie);
  }
}
