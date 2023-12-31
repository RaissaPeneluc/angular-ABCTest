import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alternatives',
  templateUrl: './alternatives.component.html',
  styleUrls: ['./alternatives.component.css']
})

/* Ele exibe as opções de resposta em uma lista */

export class AlternativesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() options: string[] = []; // Recebe as opções como entrada do componente pai
  @Input() alternativeIndex: number = 0; // Recebe o índice da pergunta como entrada do componente pai
  @Input() quizSubmitted: boolean = false;  // Recebe o estado do quiz como entrada
  @Output() selectOption = new EventEmitter(); // Emite evento quando uma opção é selecionada
  selectedOption: string = ''; // Mantém o controle da opção selecionada

  /* Verifica se o quiz foi submetido antes de permitir a mudança de resposta */

  handleOptionChange(event: any): void {
    if (!this.quizSubmitted) {
      const { alternativeIndex, option } = event;
      this.selectOption.emit({ questionIndex: alternativeIndex, option: option });
    }
  }
}
