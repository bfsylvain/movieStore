import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/features/header/header.component';
import { MenuSidebarComponent } from './components/features/menu-sidebar/menu-sidebar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuSidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    MenuSidebarComponent
  ]
})
export class NavigationModule { }
