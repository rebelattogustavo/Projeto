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
              if (produto.id == result.ID_PRODUTO) {
                let product = {
                  nome: produto.nome,
                  valor: produto.valor, 
                  imagem: produto.imagem
                }
                this.listaCarrinho.push(product);
              }
            });
          });
        }
      });
    });
  }
  

}
