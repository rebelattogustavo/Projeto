import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider,
} from 'angular-6-social-login-v2';
import  { UsuarioService } from '../services/usuario.service'
import { ManagerService } from '../services/manager.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user ='';
  pass='';
  
  
  constructor(private usuarioService: UsuarioService, private route: Router, 
    private elementRef: ElementRef,private managerService: ManagerService , private socialAuthService: AuthService) {
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'black';
   }
  
  

  ngOnInit() {
    this.usuarioService.buscarUsuario()
    .then(resultado => {
      console.log('RESULTADO:', resultado)
    }).catch(erro =>{
      console.log('ERRO AO BUSCAR USUÁRIOS:', erro);
    });

  }


  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.route.navigate(['main'])
  })};

  login(){
    let conta = 0;
    if(this.user == "" || this.pass == "" && conta == 0){
      alert("INVÁLIDO")
      conta++;
    }else {
      conta = 0;
      this.usuarioService.buscarUsuario()
      .then((resultado: User[]) =>{
        console.log(resultado)
        for(let i=0; i < resultado.length; i++) {
          if (this.user == resultado[i].NOME && this.pass == resultado[i].PASSWORD){
            localStorage.setItem("LogadoUser",'1')
            this.route.navigate(['/main']);
            conta++;
          }
        }
      }
      )}
    
    conta = 0;
    if(this.user == "" || this.pass == ""){
      alert("INVÁLIDO")
    }else {
      this.managerService.buscarManager()
      .then((resultado: User[]) =>{
        console.log(resultado)
        for(let i=0; i < resultado.length; i++) {
            if (this.user == resultado[i].NOME && this.pass == resultado[i].PASSWORD){
              localStorage.setItem("LogadoManager", '2')
              this.route.navigate(['/main-manager']);
              conta++;
            }
        }
        if(conta == 0){
          alert("USUÁRIO INVÁLIDO")
        }
      }
      )}
  
    }

  //   for(let i of this.listaUsuarios){
  //     if(i.username == this.user && i.password == this.pass){
  //       localStorage.setItem('USER: ', this.user);
  //       localStorage.setItem('PASS: ', this.pass);
  //       conta++;
  //     }
  //   }
  //   if(conta==0){
  //     alert('Usuário inválido!')
  //   }
  

//   login(){
//         fetch('/api/buscar_usuario',
//       {
//           method: 'POST',
//           body: JSON.stringify(
//               {
//                   nickname: this.user, password: this.pass
//               }
//           ),
//           headers: {
//               'Content-Type': 'application/json'
//           }
//       }
//   ).then(function (result){
//       return result.json();
//   }).then(function (dados){
//       console.log(dados);
//   }).catch(function(erro){
//     console.log(erro);
//   })
//   }

  cadastro(){
    this.route.navigate(['/cadastro/'])
  }
}

interface User {
  NOME: string;
  PASSWORD: string;
}