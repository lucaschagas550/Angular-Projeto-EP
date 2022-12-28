import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produtos.service';
import { Produto } from '../produto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
})
export class DetalheProdutoComponent implements OnInit {

  constructor(
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
  ) { }

  public produto !: Produto;
  public id !: number;


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']; //pega o id da rota declarado no path do app.routes
    this.produtoService.obterProdutoPorId(this.id).subscribe(
      {
        next: (produto) => {
          this.produto = produto;
        },
        error: (error) => {
          console.log(error);
        },
      }
    );
  }
}
