import { Component } from "@angular/core";

/**
 * Usa esse component para ter uma camada unica nele
 * todas telas desse componente se atualizam dentro dele
 */

@Component({
    template: `
        <h2 fxLayoutAlign="center">Controle de Ponto</h2>
        <router-outlet></router-outlet> 
    `
})
export class FuncionarioComponent {
}