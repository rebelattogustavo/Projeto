import { Component, OnInit, ElementRef } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service'; 
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-finalizar-pedido',
  templateUrl: './finalizar-pedido.component.html',
  styleUrls: ['./finalizar-pedido.component.css']
})
export class FinalizarPedidoComponent implements OnInit {

  constructor(private produtoService: ProdutoService, private carrinhoService: CarrinhoService, private elementRef: ElementRef) { 
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'black'
  }

listaCarrinho = [];
qntd_desejada;

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
                  qtd: produto.QUANTIDADE,
                  qntd_desejada: result.QUANTIDADE
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
