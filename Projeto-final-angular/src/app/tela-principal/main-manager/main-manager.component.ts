import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';
 
@Component({
  selector: 'app-main-manager',
  templateUrl: './main-manager.component.html',
  styleUrls: ['./main-manager.component.css']
})
export class MainManagerComponent implements OnInit {

  constructor(private elementRef: ElementRef,private route: Router, private produtoService: ProdutoService) { 
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'black';

  }
  produtos = []

  ngOnInit() {
    this.produtoService.buscarProdutos().then((result: any) => {
      result.find( valorResultado => {
        let info = {
          id: valorResultado.ID,
          nome: valorResultado.NOME,
          preco: valorResultado.VALOR,
          qtd: valorResultado.QUANTIDADE,
          img: valorResultado.BASE64,
        }
        
        this.produtos.push(info)
      })
      console.log("Lista: ", result)
    })
  }

  cadastrarProduto(){
    this.route.navigate(['/cadastro-produtos'])
  }

  logOut(){
    localStorage.removeItem("LogadoUser");
    localStorage.removeItem("LogadoManager");
    this.route.navigate([''])
  }
  
  remover(id){
    this.produtoService.removerProduto(id).then(result => {
      this.route.navigate(['/main-manager'])
      console.log(result)
    }).catch(erro => {
      console.log(erro)
    })
    window.location.reload();
  }
}
