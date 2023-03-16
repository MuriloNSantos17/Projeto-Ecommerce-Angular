import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


/*COMPONENTES DO PRODUTO*/







import { ProdutoListComponent } from './produto-list/produto-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateProdutoComponent } from './create-produto/create-produto.component';
import { ProdutoDetailsComponent } from './produto-details/produto-details.component';
import { UpdateProdutoComponent } from './update-produto/update-produto.component';



@NgModule({
  declarations: [
    AppComponent,
    ProdutoListComponent,
    CreateProdutoComponent,
    ProdutoDetailsComponent,
    UpdateProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
