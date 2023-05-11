import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.scss']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos = [
    /*     {
          conteudo: "Teste",
          autoria: "Bruno Passos",
          modelo: 'modelo3'
        },
        {
          conteudo: "Teste",
          autoria: "Bruno Passos",
          modelo: 'modelo1'
        } */
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
