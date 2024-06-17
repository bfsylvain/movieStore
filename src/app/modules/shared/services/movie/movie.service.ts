import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, switchMap, tap } from 'rxjs';
import { MovieShortDTO } from '../../models/types/movie-short-DTO.type';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _http = inject(HttpClient);
  private readonly _BASE_URL = environment.baseUrl + '/movies';

  private allMovieList: MovieShortDTO[] = [];
  private movies$: BehaviorSubject<MovieShortDTO[]> = new BehaviorSubject(
    [] as MovieShortDTO[]
  );

  constructor() {}

  
  
  fetchMovies$(): Observable<MovieShortDTO[]> {
    return this._http.get<MovieShortDTO[]>(this._BASE_URL + '/get/all').pipe(
      tap((response) => {
        this.allMovieList = response;
        this.movies$.next(response);
      })
    );
  }
  
  getAllMovies(): void {
    this.movies$.next(this.allMovieList)
  }
  // getAllMovies$(): Observable<MovieShortDTO[]> {
  //   return this._http.get<MovieShortDTO[]>(this._BASE_URL + '/get/all').pipe(
  //     tap((response) => {
  //       this.movies$.next(response);
  //     })
  //   );
  // }

  getWatchedMovies(): void {
    const watchedMovies = this.allMovieList.filter(movie => movie.isSeen)
    this.movies$.next(watchedMovies)
  }
  // getWatchedMovies$(): Observable<MovieShortDTO[]> {
  //   return this._http
  //     .get<MovieShortDTO[]>(this._BASE_URL + '/get/watched')
  //     .pipe(tap((result) => this.movies$.next(result)));
  // }

  getnotWatchedMovies(): void {
    const watchedMovies = this.allMovieList.filter(movie => !movie.isSeen)
    this.movies$.next(watchedMovies)

  }
  // getNotWatchedMovies$(): Observable<MovieShortDTO[]> {
  //   return this._http
  //     .get<MovieShortDTO[]>(this._BASE_URL + '/get/not-watched')
  //     .pipe(tap((result) => this.movies$.next(result)));
  // }

  getMovieList$(): Observable<MovieShortDTO[]> {
    return this.movies$.asObservable();
  }
}
