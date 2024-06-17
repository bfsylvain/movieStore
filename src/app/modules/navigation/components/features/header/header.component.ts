import { Component, inject } from '@angular/core';
import { NavigationService } from '../../../../shared/services/navigation/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  title: string = "M.M.D.B."
  private _navigationService = inject(NavigationService)
  homeLink: string = '/home';


  onClick() {
    window.scrollTo(0, 0);
    this._navigationService.setSidebarVisible();
  }

}
