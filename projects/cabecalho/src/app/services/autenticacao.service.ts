import { EventEmitter, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private storage: StorageService) {

  }

  public readonly eventAutenticado: EventEmitter<boolean> = new EventEmitter();

  public autenticar(params: { login: string, senha: string  }): Observable<boolean> {
    this.storage.set('autenticado', 'true');
    this.eventAutenticado.emit(true);
    return of(true);
  }

  public sair(): Observable<boolean> {
    this.storage.remove('autenticado');
    this.eventAutenticado.emit(false);
    return of(true);
  }

  public inicializar(): Observable<boolean> {
    const resultado = this.storage.get('autenticado') === 'true';
    this.eventAutenticado.emit(resultado);
    return of(resultado);
  }
}
