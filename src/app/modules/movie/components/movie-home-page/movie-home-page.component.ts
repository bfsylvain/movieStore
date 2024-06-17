import { Component, inject } from '@angular/core';
import { PageNavigation } from '../../../shared/models/types/page-navigation.type';
import { NavigationService } from '../../../shared/services/navigation/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-home-page',
  templateUrl: './movie-home-page.component.html',
  styleUrl: './movie-home-page.component.scss'
})
export class MovieHomePageComponent {

  private _navService= inject(NavigationService);
  private _router= inject(Router)

  pagesToNavigate: PageNavigation[] = this._navService.setMoviePageNavigationList()


  navigateTo(url: string): void {
    this._router.navigateByUrl(url)
  }

}
