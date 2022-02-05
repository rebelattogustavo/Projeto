import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private route: Router, private elementRef: ElementRef) {
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'black'; { }
  }

  ngOnInit() {
  }

  voltar(){
    this.route.navigate([''])
  }

}
