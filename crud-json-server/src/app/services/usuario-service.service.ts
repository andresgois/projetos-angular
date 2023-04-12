import { Injectable } from '@angular/core';
import { Usuario } from './../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServiceService {

  private url = "http://localhost:3000/usuario";
  private listaUsuario: Usuario[];

  constructor(private httpClient: HttpClient) {
    this.listaUsuario = [];
  }

  listaTodosUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url);
  }

}
