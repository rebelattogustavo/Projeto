import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';


@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  constructor(private route: Router, private elementRef: ElementRef, private produto: ProdutoService) { 
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'black';
  }

  ngOnInit() {
  }

  imgTenisURL;

  imgCarrega(event){
    const file = new FileReader();
    file.onload = (e) => {
      this.imgTenisURL = e.target.result;
    };
    file.readAsDataURL(event.target.files[0]);
    }

    nome='';
    preco='';
    

    confirma(){
      this.produto.criarProduto(this.nome, this.preco)
    }
  
}




