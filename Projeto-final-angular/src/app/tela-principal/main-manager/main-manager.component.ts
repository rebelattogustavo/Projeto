import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-manager',
  templateUrl: './main-manager.component.html',
  styleUrls: ['./main-manager.component.css']
})
export class MainManagerComponent implements OnInit {

  constructor(private elementRef: ElementRef,private route: Router) { 
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'black';


    {
      this.produtos = JSON.parse(localStorage.getItem('PRODUTOS')) || [];
    }
  }

  produtos = []

  ngOnInit() {
    buscarProutos()
    .then( resltado: any => {
      resultado.find( valorResultado => {
        let info = {
          nome valorResultado.NOme,
          preco: avlorResultado.preco
        }

        this.produtos.push(info)
      })
    })
  }

  cadastrarProduto(){
    this.route.navigate(['/cadastro-produtos'])
  }

}
