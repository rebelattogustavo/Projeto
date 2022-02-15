import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private route: Router, private elementRef: ElementRef, private user: UsuarioService) {
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'black'; { }
  }

  ngOnInit() {
  }

  nome = "";
  password = "";

  voltar(){
    this.route.navigate([''])
  }

  cadastrar(){
    this.user.criarUsuario(this.nome, this.password)
  }

}
