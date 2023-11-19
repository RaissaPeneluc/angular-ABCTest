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
  @Output() selectOption = new EventEmitter(); // Emite evento quando uma opção é selecionada
  selectedOption: string = ''; // Mantém o controle da opção selecionada

}
