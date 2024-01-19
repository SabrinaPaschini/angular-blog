// outro-comp.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outro-comp',
  templateUrl: './outro-comp.component.html',
  styleUrls: ['./outro-comp.component.css']
})
export class OutroCompComponent implements OnInit {

  caminhoDaImagem: string = './assets/imagem-exemplo.jpg';

  constructor() { }

  ngOnInit(): void {
    // Lógica de inicialização, se necessário.
  }

}