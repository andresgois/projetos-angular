import { Injectable } from '@angular/core';
import { Usuario } from './../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServiceService {

  private url = "http://localhost:3000/usuario";

  constructor(private httpClient: HttpClient) {  }

  listaTodosUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url);
  }

  usuarioPost(u: Usuario): Observable<Usuario> {
    console.log("post u")
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(u);
    return this.httpClient.post<Usuario>(this.url, body, {'headers': headers});
  }

}
