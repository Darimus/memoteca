import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento = {
    conteudo: "Bla bla",
    autoria: "Bruno",
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return "pensamentp-g"
    }
    return "pensamento-p"
  }

}
