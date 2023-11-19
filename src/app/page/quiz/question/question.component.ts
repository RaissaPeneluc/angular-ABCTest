import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

/*  Exibe a pergunta recebida como entrada @Input(). */

export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() question: string = ''; // Recebe a pergunta como entrada do componente pai
  @Input() questionIndex: number = 0; // Recebe índice da pergunta como entrada do componente pai

}
