import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllHomeComponent } from './page/home/all-home/all-home.component';
import { QuizComponent } from './page/quiz/quiz.component';



const routes: Routes = [
  { path: 'home', component: AllHomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
