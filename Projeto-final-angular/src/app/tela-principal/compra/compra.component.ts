import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProdutoService } from 'src/app/services/produto.service';
import { CarrinhoService } from 'src/app/services/carrinho.service'; 

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor(private route: Router, private elementRef: ElementRef, private produtoService: ProdutoService, private carrinhoService: CarrinhoService) { 
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'black'
  }

  id;
  verificaId;
  nome;
  preco;
  qtd;
  img;
  id_cliente = localStorage.getItem("ID");

  listaCarrinho=[];

  ngOnInit() {
    this.carrinhoService.listarCarrinho().then((result: any) => {
      console.log("Carrinho: ", result);
      result.find( (valorResultado) => {
        
        let info = {
          verificaId: valorResultado.ID_PRODUTO
        }
        this.listaCarrinho.push(info)
      })
    })

    if (this.route.url.length > 10) {
      this.id = this.route.url.substring(this.route.url.length - 2);
    } else {
      this.id = this.route.url.substring(this.route.url.length - 1);
    }
    this.produtoService.buscarProdutos().then((result: any) => {
      result.find( (valorResultado) => {
        if (this.id == valorResultado.ID) {
          this.nome = valorResultado.NOME,
          this.preco = valorResultado.VALOR,
          this.qtd = valorResultado.QUANTIDADE,
          this.img = valorResultado.BASE64
        }
      })
    });
  };

  redimensiona(){
    this.route.navigate(["/main"]);
  }

  carrinho(){
    this.route.navigate(["/carrinho"])
  }

  logOut(){
    localStorage.removeItem("LogadoUser");
    localStorage.removeItem("LogadoManager");
    this.route.navigate([''])
  }

  addCarrinho(){
    let num = 0;
    for(let i=0;i<this.listaCarrinho.length;i++){
      if(this.id == this.listaCarrinho[i].verificaId){
        num = 1;
        setTimeout(() => {
          alert("PRODUTO JÁ INSERIDO")
        }, 500);
      }
    }
    if(num ==0){
      if (localStorage.getItem("ID") == null) {
        alert("Você está deslogado!")
        this.route.navigate(["/login"]);
      } else {
        let QUANTIDADE = prompt("Digite a quantidade desejada:");
        if(QUANTIDADE > this.qtd){
          alert("Quantidade indisponível!")
        }else{
          this.produtoService.comprar(QUANTIDADE, localStorage.getItem("ID"), this.id);
          alert("Produto inserido no carrinho com sucesso!!!!");
          this.route.navigate(["/main"]);
        }
      }
    }
  }

  voltar(){
    this.route.navigate(['/main'])
  }

}
