import { Component, DestroyRef, inject } from '@angular/core';
import { DirectorService } from '../../../../shared/services/director/director.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DirectorBasicDTO } from '../../../../shared/models/types/director-basic-DTO.type';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-director-list',
  templateUrl: './director-list.component.html',
  styleUrl: './director-list.component.scss'
})
export class DirectorListComponent {

  private _directorService = inject(DirectorService)
  private _router = inject(Router)
  private _destroyRef: DestroyRef = inject(DestroyRef)

  directorList$: Observable<DirectorBasicDTO[]> = this._directorService.getDirectorList$()

  ngOnInit(): void {
    this._directorService.getAllDirectors$()
    .pipe(takeUntilDestroyed(this._destroyRef))
    .subscribe()
  }

  goToDirectorPage(movieId: number): void {
    this._router.navigate([`directors/director/${movieId}`])
  }

  deleteMovie(id: number) {
    this._directorService.deleteMovie(id)
  }
}
