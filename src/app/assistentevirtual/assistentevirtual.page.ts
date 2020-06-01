import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assistentevirtual',
  templateUrl: './assistentevirtual.page.html',
  styleUrls: ['./assistentevirtual.page.scss'],
})
export class AssistentevirtualPage implements OnInit {

  constructor() { }

  public mensagemSophia: any;
  public opcao1: any;
  public opcao2: any;
  public opcao3: any;
  public opcao4: any;
  public opcao: number;

  public setOpcoes() {
    this.mensagemSophia = "Olá, sou a Sophia e auxiliarei você com o que precisar! Por favor, digite a opção desejada para seguirmos."
    this.opcao1 = "1. O que é Previdência Privada?";
    this.opcao2 = "2. Como posso adquirir uma Previdência Privada?";
    this.opcao3 = "3. Quais as condições para ter uma Previdência Privada?";
    this.opcao4 = "4. Quais são os benefícios?";
  }

  public escolaOpcao() {
    switch (this.opcao) {
      case 1:
        this.mensagemSophia = "Você já conhece nossa FAQ? Temos essa definição por lá ;)";
        this.opcao1 = "1. Sim";
        this.opcao2 = "2. Não";
        this.opcao3 = "3. Volta ao menu anterior";
        this.opcao4 = null;
        this.opcao = null;
        break

      case 2:
        this.mensagemSophia = "Em nosso simulador podemos lhe direcionar o melhor plano para aquisição, você já fez uma simulação?";
        this.opcao1 = "1. Sim";
        this.opcao2 = "2. Não";
        this.opcao3 = "3. Volta ao menu anterior";
        this.opcao4 = null;
        this.opcao = null;
        break;

      case 3:
        this.mensagemSophia = "Para adquirir um plano você precisa seguir alguns requisitos, em nossa FAQ temos uma explicação sobre o que é necessário =)";
        this.opcao1 = "1. Quero conhecer";
        this.opcao2 = "2. Volta ao menu anterior";
        this.opcao3 = null;
        this.opcao4 = null;
        this.opcao = null;
        break;

      case 4:
        this.mensagemSophia = "Cada plano possui seus benefícios próprios, Faça uma simulação e o plano sugerido irá lhe apresentar seus benefícios ;)";
        this.opcao1 = "1. Quero simular!";
        this.opcao2 = "2. Volta ao menu anterior";
        this.opcao3 = null;
        this.opcao4 = null;
        this.opcao = null;
        break;
    }
  }

  ngOnInit() {
    this.setOpcoes();
  }

}
