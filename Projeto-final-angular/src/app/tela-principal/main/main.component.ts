import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private elementRef: ElementRef, private route: Router, private produtoService: ProdutoService) {
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'black';
   }

   produtos = []

  ngOnInit() {
    this.produtoService.buscarProdutos().then((result: any) => {
      result.find( valorResultado => {
        let info = {
          nome: valorResultado.NOME,
          preco: valorResultado.VALOR,
          qtd: valorResultado.QUANTIDADE,
          img: valorResultado.BASE64,
        }
        console.log("Lista: ", result)
        this.produtos.push(info)
      })
    })
  }

  imageURL 
  teste
  openModal

  mostrarImagem(event){
    const file = new FileReader
    file.onload = (e) => {
      this.imageURL = e.target.result;
    }
    this.teste = 1
    file.readAsDataURL(event.target.files[0])
  }

  redimensiona(){
    this.route.navigate(['/main'])
  }

}
