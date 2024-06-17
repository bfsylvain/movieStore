import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageNavigation } from '../../models/types/page-navigation.type';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  isSidebarVisible$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  PageNavigationList: PageNavigation[] = [
    { name: 'Accueil', url: 'home' },
    { name: 'Films', url: 'movies' },
    { name: 'Réalisateurs', url: 'directors' },
  ];

  MoviePageNavigationList: PageNavigation[] = [
    { name: 'TOUS', url: 'all' },
    { name: 'DEJA VUS', url: 'seen' },
    { name: 'A VOIR', url: 'to-watch' },
    { name: 'AJOUTER', url: 'add-movie' },

  ]

  constructor() { }

  setSidebarVisible(): void {
    this.isSidebarVisible$.next(!this.isSidebarVisible$.value);
  }

  getSidebarIsVisible$(): Observable<boolean> {
    return this.isSidebarVisible$.asObservable();
  }

  setPageNavigationList(): PageNavigation[] {
    return this.PageNavigationList;
  }

  setMoviePageNavigationList(): PageNavigation[] {
    return this.MoviePageNavigationList;
  }


}
