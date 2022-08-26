import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from 'src/app/shared/models/produto-model';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/core/service/produto-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})

export class ProdutoDetalheComponent implements OnInit {

  produtos: ProdutoModel[] = [];
  produto: ProdutoModel = new ProdutoModel(0, '', '', 0)
  campoProcura: FormControl = new FormControl('')


  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute) {
    produtoService.getProdutos().subscribe(
      (value: ProdutoModel[]) => {
        console.log(value);
        this.produtos = value;
      }
      , error => {

      }
      , () => {

      }
    );
  }

  ngOnInit(): void {
  }

  findById(): void {
    if (this.produto && this.produto.id) {
      this.produtoService.findById(this.produto.id!).subscribe((resposta) => {
        this.produto.nomeProd = resposta.nomeProd
        this.produto.descProd = resposta.descProd
        this.produto.valorProd = resposta.valorProd
        })
    }
  }

  findByName(): void {

    this.produtoService.findByName(this.campoProcura.value).subscribe((resposta) => {
      this.produtos = resposta
      console.log(this.produto)
    })
  }

  private getProdutos() {
    this.produtoService.getProdutos().subscribe(data => {
      this.produtos = data;
    });
  }

  delete(id: number) {
    this.produtoService.delete(id).subscribe(data => {
      this.getProdutos();
    })
  }

  update(produto: ProdutoModel) {
    this.router.navigateByUrl('/produto-cadastro/' + produto.id)
  }
}
