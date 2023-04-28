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
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(u);
    return this.httpClient.post<Usuario>(this.url, body, {'headers': headers});
  }

  edit(u: Usuario): Observable<Usuario> {
    let id = u.id;
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(u);
    return this.httpClient.put<Usuario>(`${this.url}/${id}`, body, {'headers': headers});
  }

  deletar(id: number | undefined) {
    const headers = { 'content-type': 'application/json'}
    return this.httpClient.delete(`${this.url}/${id}`, {'headers': headers});
  }

}
