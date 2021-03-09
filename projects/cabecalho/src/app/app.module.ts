import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { MenuOnComponent } from './menu-on/menu-on.component';
import { MenuOffComponent } from './menu-off/menu-off.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuOnComponent,
    MenuOffComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const element = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('remote-app-cabecalho', element);
  }
}
