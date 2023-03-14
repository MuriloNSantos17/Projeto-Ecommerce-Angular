import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Rotas do produto*/

import { ProdutoListComponent } from './produto-list/produto-list.component';

const routes: Routes = [
    { path: 'produtos', component: ProdutoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
