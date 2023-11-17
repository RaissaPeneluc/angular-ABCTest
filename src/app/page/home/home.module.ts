import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomePrincipalComponent } from './home-principal/home-principal.component';



@NgModule({
  declarations: [
    MenuBarComponent,
    HomePrincipalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuBarComponent,
    HomePrincipalComponent
  ]
})

export class HomeModule { }
