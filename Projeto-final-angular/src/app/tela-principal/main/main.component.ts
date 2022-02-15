import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private elementRef: ElementRef, private route: Router) {
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'black';
   }

  ngOnInit() {
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
