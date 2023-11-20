import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AllHomeComponent } from '../home/all-home/all-home.component';

import { QuizComponent } from './quiz.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';
import { AlternativesComponent } from './alternatives/alternatives.component';

const routes: Routes = [
  { path: 'home', component: AllHomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    QuizComponent,
    QuestionComponent,
    ResultComponent,
    AlternativesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
    FormsModule
  ],
  exports: [
    QuizComponent,
    QuestionComponent,
    ResultComponent
  ]
})

export class QuizModule { }
