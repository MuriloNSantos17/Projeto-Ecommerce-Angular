import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Rotas do produto*/

import { ProdutoListComponent } from './produto-list/produto-list.component';
import { CreateProdutoComponent } from './create-produto/create-produto.component';
import { ProdutoDetailsComponent } from './produto-details/produto-details.component';
import { UpdateProdutoComponent } from './update-produto/update-produto.component';

const routes: Routes = [
    { path: '', redirectTo: 'produtos', pathMatch: 'full' },
    { path: 'produtos', component: ProdutoListComponent},
    { path: 'cadastro/produtos', component: CreateProdutoComponent},
    { path: 'produtos/detalhe/:id', component: ProdutoDetailsComponent},
    { path: 'produtos/update/:id', component: UpdateProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
