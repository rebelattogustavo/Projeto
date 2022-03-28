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


    {
      this.produtos = JSON.parse(localStorage.getItem('PRODUTOS')) || [];
    }
  }

  produtos = []

  ngOnInit() {
    this.produtoService.buscarProdutos().then(result: any => {
      result.find( valorResultado => {
        let info = {
          nome: valorResultado.nome,
          preco: valorResultado.preco
        }
        this.produtos.push(info)
      })
    })
  }

  cadastrarProduto(){
    this.route.navigate(['/cadastro-produtos'])
  }

}
