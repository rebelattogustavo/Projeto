import { Component, ElementRef, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(private elementRef: ElementRef,private carrinhoService: CarrinhoService, private produtoService: ProdutoService) {
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'black'
   }
  
  listaCarrinho=[];

  ngOnInit() {
    this.carrinhoService.listarCarrinho().then((resultadoListar: any) => {
      resultadoListar.find(result => {
        if (result.ID_PESSOA == localStorage.getItem("ID")) {
          this.produtoService.buscarProdutos().then((resultado: any) => {
            resultado.find((produto) => {
              if (produto.ID == result.ID_PRODUTO) {
                let prod = {
                  nome: produto.NOME,
                  preco: produto.VALOR,
                  img: produto.BASE64,
                  qtd: produto.QUANTIDADE
                }
                this.listaCarrinho.push(prod);
                console.log("Lista carrinho", this.listaCarrinho)
              }
            });
          });
        }
      });
    });
  }
  

}
