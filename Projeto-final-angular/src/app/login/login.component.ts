import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider,
} from 'angular-6-social-login-v2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user ='';
  pass='';
  
  
  constructor(private route: Router , private elementRef: ElementRef, private socialAuthService: AuthService) {
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor = 'black';
   }
  
  

  ngOnInit() {
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


  listaUsuarios = [
    {username: "gustarz_", password: "248"},
    {username: "leo_rafa", password: "842"},
    {username: "a", password: "a"},
    {username: "sant_otavio", password: "428"}
  ]
  
  login(){
    let conta = 0;
    for(let i of this.listaUsuarios){
      if(i.username == this.user && i.password == this.pass){
        localStorage.setItem('USER: ', this.user);
        localStorage.setItem('PASS: ', this.pass);
        this.route.navigate(['/main/'])
        conta++;
      }
    }
    if(conta==0){
      alert('Usuário inválido!')
    }
  }

  cadastro(){
    this.route.navigate(['/cadastro/'])
  }


}
