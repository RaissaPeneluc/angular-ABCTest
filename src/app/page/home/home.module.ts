import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HomePrincipalComponent } from './home-principal/home-principal.component';
import { SobreHomeComponent } from './sobre-home/sobre-home.component';
import { FooterComponent } from './footer/footer.component';
import { AllHomeComponent } from './all-home/all-home.component';

import { QuizComponent } from '../quiz/quiz.component';

const routes: Routes = [
  { path: 'home', component: AllHomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'sobre', component: SobreHomeComponent },
  { path: 'metodologia', component: FooterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    MenuBarComponent,
    HomePrincipalComponent,
    SobreHomeComponent,
    FooterComponent,
    AllHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],

  exports: [
    MenuBarComponent,
    HomePrincipalComponent,
    SobreHomeComponent,
    FooterComponent,
    AllHomeComponent,
    RouterModule
  ]
})

export class HomeModule { }
