import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  clickNaLogo() {
    console.log('Botão clicado!');
    // Adicione a lógica desejada aqui, por exemplo, redirecionar para outra página ou executar alguma ação.
  }

  clickNoNome() {
    console.log('Botão clicado!');
    // Adicione a lógica desejada aqui, por exemplo, redirecionar para outra página ou executar alguma ação.
  }

  clickNaHome() {
    console.log('Botão clicado!');
    // Adicione a lógica desejada aqui, por exemplo, redirecionar para outra página ou executar alguma ação.
  }

  clickNoSobre() {
    console.log('Botão clicado!');
    // Adicione a lógica desejada aqui, por exemplo, redirecionar para outra página ou executar alguma ação.
  }

  clickNaMetodologia() {
    console.log('Botão clicado!');
    // Adicione a lógica desejada aqui, por exemplo, redirecionar para outra página ou executar alguma ação.
  }

  clickNoContato() {
    console.log('Botão clicado!');
    // Adicione a lógica desejada aqui, por exemplo, redirecionar para outra página ou executar alguma ação.
  }

  clickNoStart() {
    console.log('Botão clicado!');
    // Adicione a lógica desejada aqui, por exemplo, redirecionar para outra página ou executar alguma ação.
  }

  ngOnInit(): void {
  }

}
