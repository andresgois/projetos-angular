import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListagemComponent } from './listagem/listagem.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lista', component: ListagemComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class appRoutingModule{}
