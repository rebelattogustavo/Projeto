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
  }

  ngOnInit() {
  }

  cadastrarProduto(){
    this.route.navigate(['/cadastro-produtos'])
  }

}
