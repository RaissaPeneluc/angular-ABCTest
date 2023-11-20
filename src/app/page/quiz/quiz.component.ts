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
      question: 'Leia o cartaz e selecione a alternativa em que mostra para que serve o texto:',
      options: ['Convidar para uma peça de teatro',
      'Divulgar um filme sobre monstros',
      'Orientar as pessoas a lavar a mão',
      'Contar uma história de terror'
      ],
      correctAnswer: 'Orientar as pessoas a lavar a mão',
      imagePath: '/assets/images/Questão 1.png'
    },
    {
      index: 2,
      question: 'Observe a figura e selecione a alternativa em que mostra o que representa a figura:',
      options: ['Cartão de aniversário',
      'Convite de aniversário',
      'Ingresso de cinema',
      'Cartão de natal'
      ],
      correctAnswer: 'Cartão de aniversário',
      imagePath: '/assets/images/Questão 2.png'
    },
    {
      index: 3,
      question: 'Selecione a alternativa que mostra o que a palavra enredar significa no poema:',
      options: ['Pegar com uma rede',
      'Costurar uma rede',
      'Fabricar a teia',
      'Cair na teia da aranha'
      ],
      correctAnswer: 'Cair na teia da aranha',
      imagePath: '/assets/images/Questão 3.png'
    },
    {
      index: 4,
      question: 'Leia o poema e selecione a alternativa que mostra qual era a preocupação da cobrinha:',
      options: ['Ter se envenenado ao se morder',
      'Ter picado uma colega da escola',
      'Ter levado uma mordida de alguém',
      'Ter cortado a língua com a mordida'
      ],
      correctAnswer: 'Ter se envenenado ao se morder',
      imagePath: '/assets/images/Questão 4.png'
    },
    {
      index: 5,
      question: 'Leia a tirinha e elecione a alternativa que mostra o que o dono do gato pediu para ele:',
      options: ['Pegar o rato',
      'Comer o rato',
      'Pegar um biscoito',
      'Correr atrás do biscoito'
      ],
      correctAnswer: 'Pegar o rato',
      imagePath: '/assets/images/Questão 5.png'
    },
    {
      index: 6,
      question: 'Leia o texto e selecione a alternativa que mostra qual é o assunto principal do texto:',
      options: ['Um frankenstein da natureza',
      'A aparência do ornitorrinco',
      'As partes de vários bichos',
      'Animais que botam ovos'
      ],
      correctAnswer: 'A aparência do ornitorrinco',
      imagePath: '/assets/images/Questão 6.png'
    },
    {
      index: 7,
      question: 'Leia o texto e selecione a alternativa que mostra que cor é a arara da história:',
      options: ['Azul',
      'Verde',
      'Amarela',
      'Vermelha'
      ],
      correctAnswer: 'Vermelha',
      imagePath: '/assets/images/Questão 7.png'
    },
    {
      index: 8,
      question: 'Leia o poema e selecione a alternativa que mostra o motivo da foca fazer uma briga:',
      options: ['Fazer uma fofoca',
      'Dar uma sardinha',
      'Pôr uma bola no nariz',
      'Espetar ela bem na barriga'
      ],
      correctAnswer: 'Espetar ela bem na barriga',
      imagePath: '/assets/images/Questão 8.png'
    },
    {
      index: 9,
      question: 'Leia o cartaz e selecione a alternativa que mostra a finalidade do texto:',
      options: ['Ensinar a economizar água',
      'Vender viagens de barco',
      'Anunciar o dia da água',
      'Divulgar um livro'
      ],
      correctAnswer: 'Anunciar o dia da água',
      imagePath: '/assets/images/Questão 9.png'
    },
    {
      index: 10,
      question: 'Leia a tirinha e selecione a alternativa que mostra o lanche que Calvin pegou na cozinha:',
      options: ['Maçã',
      'Laranja',
      'Biscoito',
      'Sanduíche'
      ],
      correctAnswer: 'Biscoito',
      imagePath: '/assets/images/Questão 10.png'
    },
    {
      index: 11,
      question: 'Observe o animal de estimação de Ana e selecione a alternativa que mostra o nome do animal de estimação dela:',
      options: ['Galo',
      'Gato',
      'Calo',
      'Cabo'
      ],
      correctAnswer: 'Gato',
      imagePath: '/assets/images/Questão 11.png'
    },
    {
      index: 12,
      question: 'Observe o brinquedo de Bruno e selecione a alternativa que mostra o nome do brinquedo dele:',
      options: ['Pião',
      'Pilão',
      'Pera',
      'Pirão'
      ],
      correctAnswer: 'Pião',
      imagePath: '/assets/images/Questão 12.png'
    },
    {
      index: 13,
      question: 'Leia o cartaz e selecione a alternativa que mostra o significado de “quem cola só enrola”:',
      options: ['Quem copia a pesquisa não aprende',
      'Quem gruda um papel no outro usa cola',
      'Quem vai para escola usa cola para grudar',
      'Quem compra tubo de cola são os pais'
      ],
      correctAnswer: 'Quem copia a pesquisa não aprende',
      imagePath: '/assets/images/Questão 13.png'
    },
    {
      index: 14,
      question: 'Observe a adivinha e selecione a alternativa que mostra o nome do animal de estimação dela:',
      options: ['O elevador',
      'O relógio',
      'O ônibus',
      'A casa'
      ],
      correctAnswer: 'O relógio',
      imagePath: '/assets/images/Questão 14.png'
    },
    {
      index: 15,
      question: 'Observe a capa desse livro e selecione a alternativa que mostra quem escreveu o livro:',
      options: ['Cláudio Thebas',
      'Eva Furnari',
      'Formato',
      'Amigos do Peito'
      ],
      correctAnswer: 'Cláudio Thebas',
      imagePath: '/assets/images/Questão 15.png'
    },
    {
      index: 16,
      question: 'Leia o texto desse livro e selecione a alternativa que mostra sobre o que é a receita:',
      options: ['Pudim de chocolate',
      'Brigadeiro de colher',
      'Bolo de chocolate',
      'Ovo de páscoa'
      ],
      correctAnswer: 'Brigadeiro de colher',
      imagePath: '/assets/images/Questão 16.png'
    },
    {
      index: 17,
      question: 'Leia o texto e selecione a alternativa que mostra por que Pinha ficou duro e branco que nem fantasma:',
      options: ['Porque a porta abriu sozinha',
      'Porque viu um fantasma',
      'Porque gritou chamando a mãe',
      'Porque deu uma dentada no sanduíche'
      ],
      correctAnswer: 'Porque a porta abriu sozinha',
      imagePath: '/assets/images/Questão 17.png'
    },

    /* Questões de Matemática */

    {
      index: 18,
      question: 'Roberto tem um galinheiro, observe a quantidade de galinhas que ele tem e selecione a alternativa que mostra a quantidade de galinhas de Roberto:',
      options: ['20',
      '24',
      '30',
      '36'
      ],
      correctAnswer: '30',
      imagePath: '/assets/images/Questão 18.png'
    },
    {
      index: 19,
      question: 'A figura mostra um teatro onde as cadeiras da plateia são numeradas de 1 a 25, o lugar de Juliano está circulado na figura. Selecione a alternativa que mostra o número da cadeira de Juliano:',
      options: ['Um',
      'Dois',
      'Doze',
      'Vinte e um'
      ],
      correctAnswer: 'Doze',
      imagePath: '/assets/images/Questão 19.png'
    },
    {
      index: 20,
      question: 'Selecione a alternativa que mostra a figura representa a maior quantidade de livros:',
      options: ['A',
      'B',
      'C',
      'D'
      ],
      correctAnswer: 'B',
      imagePath: '/assets/images/Questão 20.png'
    },
    {
      index: 21,
      question: 'A figura mostra as casas da vila onde clara mora, a casa dela está sem o número. Selecione a alternativa que mostra o número da casa de Clara:',
      options: ['149',
      '151',
      '155',
      '160'
      ],
      correctAnswer: '155',
      imagePath: '/assets/images/Questão 21.png'
    },
    {
      index: 22,
      question: 'A professora do 3º ano escreveu na lousa um exercício, ela pediu para os alunos descobrirem qual é o número que está na lousa. Selecione a alternativa que mostra o número que a professora escreveu:',
      options: ['258',
      '582',
      '825',
      '852'
      ],
      correctAnswer: '852',
      imagePath: '/assets/images/Questão 22.png'
    },
    {
      index: 23,
      question: 'A figura mostra o refeitório de uma escola. Lá havia 8 pessoas, como mostra a imagem a seguir, em seguida, chegaram mais 5 pessoas no refeitório. Selecione a alternativa que mostra a quantidade de pessoas que estão no refeitório após a chegada das 5 pessoas:',
      options: ['13',
      '8',
      '5',
      '3'
      ],
      correctAnswer: '13',
      imagePath: '/assets/images/Questão 23.png'
    },
    {
      index: 24,
      question: 'Em janeiro choveu 22 dias do mês e em fevereiro apenas 14 dias. Selecione a alternativa que mostra quantos dias a menos choveu no mês de fevereiro:',
      options: ['7',
      '8',
      '14',
      '22'
      ],
      correctAnswer: '8',
    },
    {
      index: 25,
      question: 'Gabriel resolveu uma conta no seu livro de matemática. Selecione a alternativa que mostra o resultado dessa conta:',
      options: ['26',
      '53',
      '326',
      '379'
      ],
      correctAnswer: '326',
      imagePath: '/assets/images/Questão 25.png'
    },
    {
      index: 26,
      question: 'Observe o álbum de fotografias de beatriz. Em cada página cabem 2 fotografias e o álbum tem 9 páginas. Quantas fotografias cabem nesse álbum?',
      options: ['2',
      '9',
      '11',
      '18'
      ],
      correctAnswer: '18',
      imagePath: '/assets/images/Questão 26.png'
    },
    {
      index: 27,
      question: 'Mariana comprou um pão de forma cortado em 10 fatias. Para fazer sanduíches são utilizadas 2 fatias. Quantos sanduíches mariana conseguiu montar com todas essas fatias de pão?',
      options: ['2',
      '5',
      '10',
      '12'
      ],
      correctAnswer: '5',
      imagePath: '/assets/images/Questão 27.png'
    },
    {
      index: 28,
      question: 'André ganhou um tangram de seu tio. Selecione a alternativa que mostra a quantidade de triângulos presentes no tangram:',
      options: ['9',
      '7',
      '6',
      '5'
      ],
      correctAnswer: '5',
      imagePath: '/assets/images/Questão 28.png'
    },
    {
      index: 29,
      question: 'Observe a figura de uma lixeira. Selecione a alternativa que mostra o sólido geométrico que se assemelha ao formato da lixeira',
      options: ['A',
      'B',
      'C',
      'D'
      ],
      correctAnswer: 'A',
      imagePath: '/assets/images/Questão 29.png'
    },
    {
      index: 30,
      question: 'Breno tem lápis de tamanhos diferentes em seu estojo. Selecione a alternativa que mostra o lápis de menor comprimento:',
      options: ['A',
      'B',
      'C',
      'D'
      ],
      correctAnswer: 'B',
      imagePath: '/assets/images/Questão 30.png'
    },
    {
      index: 31,
      question: 'Júlio foi ao cinema e comprou um balde de pipoca por R$13,00. Selecione a alternativa que mostra como Júlio pode pagar a pipoca',
      options: ['A',
      'B',
      'C',
      'D'
      ],
      correctAnswer: 'D',
      imagePath: '/assets/images/Questão 31.png'
    },
    {
      index: 32,
      question: 'A professora do 3º ano passou uma pesquisa para a turma para identificar que tema seus alunos gostariam de pesquisar. A professora fez uma votação dos temas e registrou no gráfico acima. Selecione a alternativa que mostra qual foi o tema o mais votado:',
      options: ['Estrelas',
      'Sol',
      'Nuvens',
      'Planetas'
      ],
      correctAnswer: 'Estrelas',
      imagePath: '/assets/images/Questão 32.png'
    },
    {
      index: 33,
      question: 'A aula de história acaba às 4h45 da tarde. Selecione a alternativa que mostra que horas acaba a aula de história:',
      options: ['A',
      'B',
      'C',
      'D'
      ],
      correctAnswer: 'B',
      imagePath: '/assets/images/Questão 33.png'
    },
    {
      index: 34,
      question: 'A mãe de Joana mediu com o termômetro, representado na imagem acima, a temperatura de sua filha. Selecione a alternativa que mostra a temperatura de Joana marcada no termômetro:',
      options: ['93',
      '63',
      '39',
      '36'
      ],
      correctAnswer: '39',
      imagePath: '/assets/images/Questão 34.png'
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
