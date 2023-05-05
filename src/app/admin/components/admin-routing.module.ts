import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AtualizacaoComponent } from './atualizacao/atualizacao.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { AdminGuard } from '../services/admin-guard.service';


export const AdminRoutes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		canActivate: [ AdminGuard ],
		children: [
		  {
			path: '', 
			component: ListagemComponent 
		  },
		  {
			path: 'cadastro', 
			component: CadastroComponent 
		  },
		  {
			path: 'atualizacao/:lancamentoId', 
			component: AtualizacaoComponent 
		  }
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(AdminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
