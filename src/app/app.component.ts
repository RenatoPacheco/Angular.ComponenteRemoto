import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Objetivo-Portal-Componente';

  ngOnInit(): void {
    const cabecalho = document.createElement('script');
    cabecalho.src = 'http://localhost:8080/cabecalho/main.js';
    document.body.appendChild(cabecalho);

    const rodape = document.createElement('script');
    rodape.src = 'http://localhost:8080/rodape/main.js';
    document.body.appendChild(rodape);
  }
}
