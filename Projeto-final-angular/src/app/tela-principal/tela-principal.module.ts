import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import CheckLogged from '../checkLogged.canActivate';
import { MainManagerComponent } from './main-manager/main-manager.component';
import { CadastrosModule } from '../cadastros/cadastros.module';
import { CadastroProdutoComponent } from '../cadastros/cadastro-produto/cadastro-produto.component';
import { ProdutoService } from '../services/produto.service';

const routes: Routes = [
  { 
    canActivate: [CheckLogged],
    path: 'tela', 
    children: [
      { path: 'main', component: MainComponent},
      { path: 'main-manager', component: MainManagerComponent},
      { path: 'cadastro-produtos', component: CadastroProdutoComponent},
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    CadastrosModule,
    ProdutoService
  ],
  declarations: [MainComponent, MainManagerComponent],
  providers: [CheckLogged]
})
export class TelaPrincipalModule { }
