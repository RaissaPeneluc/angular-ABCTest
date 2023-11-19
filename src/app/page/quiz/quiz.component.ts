import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

/* Ele contém a lógica principal do quiz, incluindo a definição das perguntas, o acompanhamento das respostas do usuário e o cálculo do
número de respostas corretas. */

export class QuizComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  questions = [

     /* Questões de Língua Portuguesa */

    {
      index: 1,
      question: 'Qual é a capital do Brasil?',
      options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Belo Horizonte'],
      correctAnswer: 'Brasília',
    },
    {
      index: 2,
      question: 'Quantos planetas existem em nosso sistema solar?',
      options: ['7', '8', '9', '10'],
      correctAnswer: '8',
    },
    {
      index: 3,
      question: 'Quem escreveu "Dom Quixote"?',
      options: ['Machado de Assis', 'Cervantes', 'Shakespeare', 'Homer'],
      correctAnswer: 'Cervantes',
    },

    /* Questões de Matemática */

    {
      index: 4,
      question: 'Quanto é 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4',
    },
    {
      index: 5,
      question: 'Qual é a raiz quadrada de 25?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '5',
    },
    {
      index: 6,
      question: 'Quanto é 3 x 8?',
      options: ['18', '21', '24', '27'],
      correctAnswer: '24',
    },
  ];

  userAnswers = Array(this.questions.length).fill(null); // Inicializa o array de respostas do usuário
  correctAnswersCount: number = 0; // Contador para respostas corretas
  quizSubmitted: boolean = false; // Flag para indicar se o quiz foi enviado

  /* É chamada quando uma opção é selecionada, verifica se a opção já foi selecionada e ajusta a seleção adequadamente. */

  handleOptionSelected(event: any): void {
    const { alternativeIndex, option } = event;

    /* Verifica se a alternativa já foi selecionada */

    if (this.userAnswers[alternativeIndex] === option) {
      this.userAnswers[alternativeIndex] = null; // Se sim, desselecione
    } else {
      this.userAnswers[alternativeIndex] = option; // Se não, selecione, a tualiza a resposta do usuário ao selecionar uma opção
    }
  }

  /* É chamada ao clicar no botão "Submit Quiz". Ela calcula o número de respostas corretas e atualiza a flag quizSubmitted para
  mostrar os resultados. */

  submitQuiz(): void {

    /* Calcula o número de respostas corretas */
    this.correctAnswersCount = this.userAnswers.reduce(
      (count, userAnswer, index) =>
        userAnswer === this.questions[index].correctAnswer ? count + 1 : count,
      0
    );

    /* Atualiza a flag para mostrar os resultados */
    this.quizSubmitted = true;
  }

}
