import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import CheckLogged from '../checkLogged.canActivate';

const routes: Routes = [
  { 
    canActivate: [CheckLogged],
    path: 'tela', 
    children: [
      { path: 'main', component: MainComponent},
  ]}
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent],
  providers: [CheckLogged]
})
export class TelaPrincipalModule { }
