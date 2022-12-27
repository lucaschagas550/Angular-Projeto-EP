import { ProdutoService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './../produto';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
})
export class ListaProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  public produtos !: Produto[];

  ngOnInit() {
    this.produtoService.obterProdutos()
    .subscribe(
      { 
        next: (produtos) => { 
          this.produtos = produtos;
          console.log(produtos);
        },
        error: (error) => {
          console.log(error)
        },
      },
    );
  }
}
