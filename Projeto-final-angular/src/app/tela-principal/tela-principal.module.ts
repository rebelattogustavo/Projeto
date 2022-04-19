import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { CheckLogged } from '../checkLogged.canActivate';
import { MainManagerComponent } from './main-manager/main-manager.component';
import { CadastrosModule } from '../cadastros/cadastros.module';
import { CadastroProdutoComponent } from '../cadastros/cadastro-produto/cadastro-produto.component';
import { FormsModule } from '@angular/forms';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CompraComponent } from './compra/compra.component';

const routes: Routes = [
  { 
    canActivate: [CheckLogged],
    path: 'tela', 
    children: [
      { path: 'main', component: MainComponent},
      { path: 'main-manager', component: MainManagerComponent},
      { path: 'cadastro-produtos', component: CadastroProdutoComponent},
      { path: 'carrinho', component: CarrinhoComponent},
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    CadastrosModule,
    FormsModule
  ],
  declarations: [MainComponent, MainManagerComponent, CarrinhoComponent, CompraComponent],
  providers: [CheckLogged]
})
export class TelaPrincipalModule { }
