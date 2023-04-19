import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ListagemComponent } from './listagem/listagem.component';
import { ModalComponent } from './modal/modal.component';
import { ModalgeralComponent } from './shared/modalgeral/modalgeral.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListagemComponent,
    ModalComponent,
    ModalgeralComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
