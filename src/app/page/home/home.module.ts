import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomePrincipalComponent } from './home-principal/home-principal.component';
import { SobreHomeComponent } from './sobre-home/sobre-home.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    MenuBarComponent,
    HomePrincipalComponent,
    SobreHomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuBarComponent,
    HomePrincipalComponent,
    SobreHomeComponent,
    FooterComponent
  ]
})

export class HomeModule { }
