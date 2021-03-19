# Angular Componente Remoto

Esse projeto é para testar a criação e uso de componentes remotos, identificar os problemas e ter uma descrição do processo.

## Servidor de desenvolvimento

Exercute `npm run serve:cabecalho` para iniciar o servidor do componete cabeçalho em [./projects/cabecalho/src](projects/cabecalho/src). A url de navegação é `http://localhost:4300/`.

Exercute `npm run serve:rodape` para iniciar o servidor do componete rodapé em [./projects/rodape/src](projects/rodape/src). A url de navegação é `http://localhost:4400/`.

Exercute `npm run serve` para iniciar o servidor da aplicação base em [./src](src), que chama os componentes remoto. A url de navegação é `http://localhost:4200/`.

Para pode acessar os cmponentes dorante o desenvolvimento do projeto base, não esquça de gerar os arquivos de produção dos componentes, e fazer da pasta dist um host na porta 8080, que é o endereço que o projeto base etá configurado para chamar os componentes.

Durante o desenvolvimento desse projeto eu usei o [live-server](https://www.npmjs.com/package/live-server).

```
live-server ./dist
```

## Gerar arquivos de produção

Exercute `npm run build:cabecalho` para gerar os arquivos de produção do componente de cabeçalho, na pasta **./dist/cabecalho**.

Exercute `npm run build:rodape` para gerar os arquivos de produção do componete de rodapé, na pasta **./dist/rodape**.

## Configurando o projeto

O projeto base foi criado do sem nenhuma definição especial. Só habilitei rotas, e optei por usar sass por que já faço isso por padrão.

```
ng new projeto-nome --routing=true --style=scss
```

A partir daqui, criei dois sub projetos, sendo um para o cabeçalho e outro para o rodapé. Neste caso opttei por não usar rotas e usei estilo como sass. Esses srão os nossos componentes remotos.

```
ng g app cabecalho --routing=false --style=scss
ng g app rodape --routing=false --style=scss
```

Agora começa a configuração para criar e usar o componente remoto, então instalamos o @angular/elements nos projetos dos componentes remotos.

```
ng add @angular/elements --project cabecalho
ng add @angular/elements --project rodape
```

Nessa etapa vamos customizar o Bootstrap no app, e definir qual tag será usada para acessar o componente. Para o cabeçalho vou usar **remote-app-cabecalho** e para o rodape **remote-app-rodape**.

A seguir, a alteração para o [app.module.ts](./projects/cabecalho/src/app/app.module.ts) do cabeçalho.

```
import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  // Removemos o bootstrap para customizar su configuração
  // bootstrap: [AppComponent] - remova essa linha
  imports: [
    BrowserModule
  ]
})
export class AppModule {
  // Importamos os Injector que vamos precisar para usar o createCustomElement
  constructor(private injector: Injector) { }

  // Já que removemos o bootstrap do @NgModule, incluimos essa função para inicializar ecustomizar.
  ngDoBootstrap() {
    // Criamos o elemento com a biblioteca do @angular/elements
    const element = createCustomElement(AppComponent, { injector: this.injector });
    // Aplicamos a customização e definimos a tag de acesso ao componente
    customElements.define('remote-app-cabecalho', element);
  }
}
```

Repita a configuração acima para o [app.module.ts](./projects/rodape/src/app/app.module.ts) do projeto rodapé.

Vamos instalar o **ngx-build-plus**, que vai permitir gerar um único arquivo de bundle para os componentes remotos.

```
npm i --save ngx-build-plus
```

Depois de instalado aplicamos o pacote para o cabeçalho e o rodapé, isso vai alterar o arquivo [angular.json](./angular.json), na configuração de bundle dos respectivos projetos.

```
ng add ngx-build-plus --project cabecalho
ng add ngx-build-plus --project rodape
```


