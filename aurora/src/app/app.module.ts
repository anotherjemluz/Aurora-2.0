import { BrowserModule } from '@angular/platform-browser';//prepara o modulo para o browser
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [//lista de componentes, diretivas e pipes a serem utilizados nesse modulo
    AppComponent
  ],
  imports: [//lista de modulos a serem utilizados
    BrowserModule
  ],
  providers: [],//lista de serviços disponiveis aos componentes anteriormente declarados
  bootstrap: [AppComponent],//componente q deve ser instanciado quando executamos a aplicação
})

export class AppModule { }
