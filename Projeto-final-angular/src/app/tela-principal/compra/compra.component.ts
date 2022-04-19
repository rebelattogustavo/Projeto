import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor(private route: Router, private elementRef: ElementRef, private produtoService: ProdutoService) { 
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'black'
  }

  id;
  nome;
  preco;
  qtd;
  img;
  id_cliente = localStorage.getItem("ID");

  listaCarrinho=[];

  ngOnInit() {
    if (this.route.url.length > 10) {
      this.id = this.route.url.substring(this.route.url.length - 2);
      console.log("A: ", this.id)
    } else {
      this.id = this.route.url.substring(this.route.url.length - 1);
      console.log("B: ", this.id)
    }
    this.produtoService.buscarProdutos().then((result: any) => {
      result.find( (valorResultado) => {
          let info = {
          id: valorResultado.ID,
          nome: valorResultado.NOME,
          preco: valorResultado.VALOR,
          qtd: valorResultado.QUANTIDADE,
          img: valorResultado.BASE64,
        }
        if (this.id == info.id) {
          this.nome = info.nome,
          this.preco = info.preco,
          this.qtd = info.qtd,
          this.img = info.img
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

  addCarrinho(){
    if (localStorage.getItem("ID") == null) {
      alert("Você está deslogado!")
      this.route.navigate(["/login"]);
    } else {
      this.produtoService.comprar(localStorage.getItem("ID"), this.id);
      alert("Produto inserido no carrinho com sucesso!!!!");
      this.route.navigate(["/main"]);
    }
  }

}
