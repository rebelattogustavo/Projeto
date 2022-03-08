import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  constructor(private elementRef: ElementRef) { 
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'black';
  }

  ngOnInit() {
  }

}
