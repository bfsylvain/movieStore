import { Component, DestroyRef, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DirectorService } from '../../../../shared/services/director/director.service';
import { Location } from '@angular/common';
import { DirectorDTO } from '../../../../shared/models/types/director-DTO.type';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-director-page',
  templateUrl: './director-page.component.html',
  styleUrl: './director-page.component.scss'
})
export class DirectorPageComponent {

  private _route = inject(ActivatedRoute);
  private _directorService = inject(DirectorService);
  private _location = inject(Location);
  private _destroyRef: DestroyRef = inject(DestroyRef);
  private _id!: number;
  public director!: DirectorDTO;

  ngOnInit(): void {
    this._id = Number(this._route.snapshot.paramMap.get('id'));
    this._directorService
      .getMovieById(this._id)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((director: DirectorDTO) => (this.director = director));
  }
}
