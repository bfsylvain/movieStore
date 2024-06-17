import { DestroyRef, Injectable, inject } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { DirectorBasicDTO } from '../../models/types/director-basic-DTO.type';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DirectorDTO } from '../../models/types/director-DTO.type';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  private _http = inject(HttpClient);
  private _destroyRef: DestroyRef = inject(DestroyRef);
  private readonly _BASE_URL = environment.baseUrl + '/directors';

  private _allDirectorList: DirectorBasicDTO[] = [];
  private _directors$: BehaviorSubject<DirectorBasicDTO[]> = new BehaviorSubject([] as DirectorBasicDTO[]);

  constructor() { }

  getAllDirectors$(): Observable<DirectorBasicDTO[]> {
    return this._http.get<DirectorBasicDTO[]>(this._BASE_URL + '/get/all').pipe(
      tap((response) => {
        this._allDirectorList = response;
        this._directors$.next(response);
      })
    );
  }

  getDirectorList$(): Observable<DirectorBasicDTO[]> {
    return this._directors$.asObservable();
  }

  getMovieById(directorId: number): Observable<DirectorDTO> {
    return this._http.get<DirectorDTO>(this._BASE_URL + `/get/${directorId}`);
  }

  deleteMovie(id: number): void {
    this._allDirectorList = this._allDirectorList.filter((director) => director.id !== id);
    this._directors$.next(this._allDirectorList);
    this._http
      .delete(this._BASE_URL + `/delete/${id}`)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe();
  }

}
