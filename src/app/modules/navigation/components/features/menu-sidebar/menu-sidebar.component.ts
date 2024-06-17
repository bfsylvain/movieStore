import { Component, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationService } from '../../../../shared/services/navigation/navigation.service';
import { PageNavigation } from '../../../../shared/models/types/page-navigation.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrl: './menu-sidebar.component.scss',
})
export class MenuSidebarComponent {
  pagesToNavigateList: PageNavigation[] =
    this.navService.setPageNavigationList();

  isSidebarOpen$: Observable<boolean> = this.navService.getSidebarIsVisible$();

  constructor(
    private navService: NavigationService,
    private _renderer: Renderer2,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.navService.getSidebarIsVisible$().subscribe((res: boolean) => {
      if (res) {
        this._renderer.setStyle(document.body, 'overflow', 'hidden');
      } else {
        this._renderer.setStyle(document.body, 'overflow', 'auto');
      }
    });
  }

  onClick(e: string) {
    this._router.navigateByUrl(e);
    this.navService.setSidebarVisible();
  }
}
