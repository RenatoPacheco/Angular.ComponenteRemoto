import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-menu-off',
  templateUrl: './menu-off.component.html',
  styleUrls: ['./menu-off.component.scss']
})
export class MenuOffComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private autenticacaoService: AutenticacaoService) {
    this.formulario = this.formBuilder.group({
      login: new FormControl(null, [Validators.required]),
      senha: new FormControl(null, [Validators.required])
    });
  }

  formulario: FormGroup;

  ngOnInit(): void {

  }

  autenticar(): void {
    this.autenticacaoService.autenticar({
      login: this.formulario.get('login').value ?? null,
      senha: this.formulario.get('senha').value ?? null,
    });
  }

}
