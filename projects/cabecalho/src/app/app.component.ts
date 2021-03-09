import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';

import { AutenticacaoService } from './services';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private autenticacaoService: AutenticacaoService) {

  }

  public exibirMenu = false;
  @Output() public readonly autenticado: EventEmitter<boolean> = new EventEmitter();

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
