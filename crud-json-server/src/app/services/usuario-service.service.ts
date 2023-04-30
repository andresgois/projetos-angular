import { Injectable } from '@angular/core';
import { Usuario } from './../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioServiceService {

  private url: string = environment.urlUsuario;
  private header = { 'content-type': 'application/json'};

  constructor(private httpClient: HttpClient) {  }

  listaTodosUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url);
  }

  usuarioPost(u: Usuario): Observable<Usuario> {
    const body=JSON.stringify(u);
    return this.httpClient.post<Usuario>(this.url, body, {'headers': this.header});
  }

  edit(u: Usuario): Observable<Usuario> {
    let id = u.id;
    const body=JSON.stringify(u);
    return this.httpClient.put<Usuario>(`${this.url}/${id}`, body, {'headers': this.header});
  }

  deletar(id: number | undefined) {
    return this.httpClient.delete(`${this.url}/${id}`, {'headers': this.header});
  }

}
