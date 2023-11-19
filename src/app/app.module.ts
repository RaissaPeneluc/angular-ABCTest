import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeModule } from './page/home/home.module';
import { QuizModule } from './page/quiz/quiz.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    QuizModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
