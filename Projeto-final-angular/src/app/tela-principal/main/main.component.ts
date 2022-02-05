import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor( private elementRef: ElementRef) {
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'black';
   }

  ngOnInit() {
  }

}
