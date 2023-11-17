import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  clicouNaLogo() {
    console.log('Botão clicado!');
    // Adicione a lógica desejada aqui, por exemplo, redirecionar para outra página ou executar alguma ação.
  }

  ngOnInit(): void {
  }

}
