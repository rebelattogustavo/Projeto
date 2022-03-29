import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { ManagerService } from '../services/manager.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private route: Router, private elementRef: ElementRef, private user: UsuarioService, private manager: ManagerService) {
    this.elementRef.nativeElement.ownerDocument
      .body.style.backgroundColor = 'black'; { }
  }

  ngOnInit() {
  }

  nome = "";
  password = "";

  voltar() {
    this.route.navigate([''])
  }

  cadastrar() {
    let conta = 0;
    if (this.nome == "" || this.password == "" && conta == 0) {
      alert("INVÁLIDO")
    } else {
      this.user.buscarUsuario()
        .then((resultado: User[]) => {
          for (let i = 0; i < resultado.length; i++) {
            if (this.nome == resultado[i].NOME && conta == 0) {
              conta = 2;
            }
          }
          this.manager.buscarManager()
            .then((resultado2: User[]) => {
              for (let i = 0; i < resultado2.length; i++) {
                if (this.nome == resultado2[i].NOME && conta == 0) {
                  conta = 2;
                }
              }

              if (conta == 2) {
                alert("USERNAME INVÁLIDO")
              } else {
                this.user.criarUsuario(this.nome, this.password);
              }

              console.log("Lista de user's: ", resultado)

              console.log("Lista de manager's: ", resultado2)

            })
        })
    }
  }
}
interface User {
  NOME: string;
  PASSWORD: string;
}
