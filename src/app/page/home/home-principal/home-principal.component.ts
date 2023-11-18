import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-principal',
  templateUrl: './home-principal.component.html',
  styleUrls: ['./home-principal.component.css']
})
export class HomePrincipalComponent implements OnInit {

  constructor() { }

  clickNoStart() {
    console.log('Botão clicado!');
    // Adicione a lógica desejada aqui, por exemplo, redirecionar para outra página ou executar alguma ação.
  }

  ngOnInit(): void {
  }

}
