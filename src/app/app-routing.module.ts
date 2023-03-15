import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Rotas do produto*/

import { ProdutoListComponent } from './produto-list/produto-list.component';
import { CreateProdutoComponent } from './create-produto/create-produto.component';

const routes: Routes = [
    { path: '', redirectTo: 'produtos', pathMatch: 'full' },
    { path: 'produtos', component: ProdutoListComponent},
    { path: 'cadastro/produtos', component: CreateProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
