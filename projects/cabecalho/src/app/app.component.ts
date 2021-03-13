import { Component, OnInit, OnDestroy, EventEmitter, Output, Input } from '@angular/core';

import { AutenticacaoService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private autenticacaoService: AutenticacaoService) {

  }

  @Output() readonly autenticado: EventEmitter<boolean> = new EventEmitter();
  @Input() set saida(valor: boolean) {
    this.autenticacaoService.sair();
  }

  exibirMenu = false;

  ngOnInit(): void {
    this.autenticacaoService.eventAutenticado.subscribe({
      next: (resp: boolean) => {
        this.exibirMenu = resp;
        this.autenticado.emit(resp);
      }
    });
    this.autenticacaoService.inicializar();
  }

  ngOnDestroy(): void {
    this.exibirMenu = false;
  }
}
