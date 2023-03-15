import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Produto } from '../produto';

import { ProdutoService } from '../produto.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})

export class ProdutoListComponent implements OnInit{
    
    produtos: Observable<Produto[]>;

    constructor(private produtoService: ProdutoService,
    private router: Router) {}

    ngOnInit() {
      this.reloadData();
    }
    
    reloadData() {
      this.produtos = this.produtoService.getProdutoList();
    }

    produtoDetails(id: number){
      this.router.navigate(['produtos/detalhe', id]);
    }
}
