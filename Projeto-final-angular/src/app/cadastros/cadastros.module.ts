import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CheckLogged } from '../checkLogged.canActivate';
import { Routes } from '@angular/router';


const routes: Routes = [
  { 
    canActivate: [CheckLogged],
    path: 'cadastro', 
    children: [
      { path: 'cadastro-produtos', component: CadastroProdutoComponent},
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CadastroProdutoComponent]
})
export class CadastrosModule { }
