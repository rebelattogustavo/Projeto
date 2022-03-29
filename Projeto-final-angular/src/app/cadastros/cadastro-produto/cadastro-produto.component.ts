import { Component, OnInit, ElementRef } from '@angular/core';
import { iM } from '@angular/core/src/render3';
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
      this.img = this.imgTenisURL;
    };
    file.readAsDataURL(event.target.files[0]);
  }
  
    nomeP='';
    preco='';
    img = '';
    qtd = '';
    fornecedor_id = ''
    

    confirma(){
      this.produto.criarProduto( this.nomeP, this.preco, this.img, this.qtd, this.fornecedor_id);
    }

    volta(){
      this.route.navigate(['main-manager'])
    }
  
}




