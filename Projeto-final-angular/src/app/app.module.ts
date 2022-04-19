import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular-6-social-login-v2";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TelaPrincipalModule } from './tela-principal/tela-principal.module';
import { MainComponent } from './tela-principal/main/main.component';
import { MainManagerComponent } from './tela-principal/main-manager/main-manager.component';
import { CadastrosModule } from './cadastros/cadastros.module';
import { CadastroProdutoComponent } from './cadastros/cadastro-produto/cadastro-produto.component';
import { CheckLogged } from './checkLogged.canActivate';
import { CarrinhoComponent } from './tela-principal/carrinho/carrinho.component';
import { CompraComponent } from './tela-principal/compra/compra.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
       
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("685462169845-sj6he1aop754ln7evd2cnhmq1u7ivvor.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'cadastro',
        component: CadastroComponent,
      },
      {
        path: 'main',
        component: MainComponent,
        canActivate: [CheckLogged],
      },
      {
        path: 'main-manager',
        component: MainManagerComponent,
        canActivate: [CheckLogged],
      },
      { 
        path: 'cadastro-produtos', 
        component: CadastroProdutoComponent,
        canActivate: [CheckLogged],
      },
      { 
        path: 'carrinho', 
        component: CarrinhoComponent,
        canActivate: [CheckLogged],
      },
      { 
        path: 'compra/:id_produto', 
        component: CompraComponent,
        canActivate: [CheckLogged],
      },
    ]),
    SocialLoginModule,
    BrowserModule,
    FormsModule,
    TelaPrincipalModule,
    CadastrosModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }, CheckLogged],
  bootstrap: [AppComponent]
})
export class AppModule { }
