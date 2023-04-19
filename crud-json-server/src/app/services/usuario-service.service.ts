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

  criarUsuario(user: Usuario): Observable<any> {
    console.log('user create: ',user)
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(user);
    return this.httpClient.post<Usuario>(this.url, body, {'headers':headers});
  }

}
