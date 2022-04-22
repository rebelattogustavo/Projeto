import { Component, ElementRef, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  constructor(private elementRef: ElementRef,private carrinhoService: CarrinhoService, private produtoService: ProdutoService, private route: Router) {
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'black'
   }
  
  listaCarrinho=[];
  id;
  compraTesteLista = [];

  ngOnInit() {
    this.carrinhoService.listarCarrinho().then((resultadoListar: any) => {
      console.log("Lista carrinho", resultadoListar)
      this.compraTesteLista = resultadoListar;
      resultadoListar.find(result => {
        if (result.ID_PESSOA == localStorage.getItem("ID")) {
          this.produtoService.buscarProdutos().then((resultado: any) => {
            resultado.find((produto) => {
              if (produto.ID == result.ID_PRODUTO) {
                let prod = {
                  id: produto.ID,
                  nome: produto.NOME,
                  preco: produto.VALOR,
                  img: produto.BASE64,
                  qtd: produto.QUANTIDADE
                }
                this.listaCarrinho.push(prod);
              }
            });
          });
        }
      });
    });
  }
  
  redimensiona(){
    this.route.navigate(['/main'])
  }

  carrinho(){
    this.route.navigate(["./carrinho"])
  }

  logOut(){
    localStorage.removeItem("LogadoUser");
    localStorage.removeItem("LogadoManager");
    this.route.navigate([''])
  }

  finalizar(){
    this.route.navigate(['/finalizar-pedido'])
  }

  remover(){
    this.carrinhoService.listarCarrinho().then((resultadoListar: any) =>{
      resultadoListar.find(result =>{
        for(let i =0;i<this.listaCarrinho.length;i++){
          if(result.ID_PESSOA == localStorage.getItem("ID") && result.ID_PRODUTO == this.listaCarrinho[i].id){
            this.produtoService.removerProdutoCarrinho(result.ID).then(result => {
              console.log(result)
            }).catch(erro => {
              console.log(erro)
            })
            window.location.reload();
          }
        }
      })
    })
  }

}
