import { Component } from '@angular/core';//importa modulos necessários para este módulo. No caso o modulo importado aqui é o component, presente na pasta node_modules/@angular/core, pois este arquivo em questão é um módulo do tipo component (app.COMPONENT.ts)

@Component({//declaração da classe com os metadados, representando um modulo
  selector: 'app-root', //nome da tag html pra usar tal componente
  templateUrl: './app.component.html', //endereço do template deste componente
  styleUrls: ['./app.component.css'] //endereço do estilo deste componente
})
export class AppComponent {
  title = 'app';
}
