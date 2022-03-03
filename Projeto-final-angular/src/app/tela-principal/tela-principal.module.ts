import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import CheckLogged from '../checkLogged.canActivate';
import { MainManagerComponent } from './main-manager/main-manager.component';

const routes: Routes = [
  { 
    canActivate: [CheckLogged],
    path: 'tela', 
    children: [
      { path: 'main', component: MainComponent},
      { path: 'main-manager', component: MainManagerComponent},
  ]}
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, MainManagerComponent],
  providers: [CheckLogged]
})
export class TelaPrincipalModule { }
