import { Component, OnInit } from '@angular/core';

import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-menu-on',
  templateUrl: './menu-on.component.html',
  styleUrls: ['./menu-on.component.scss']
})
export class MenuOnComponent implements OnInit {

  constructor(
    private autenticacaoService: AutenticacaoService) {

  }

  ngOnInit(): void {

  }

  public sair(): void {
    this.autenticacaoService.sair();
  }

}
