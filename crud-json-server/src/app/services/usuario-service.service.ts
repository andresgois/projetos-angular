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

  criarUsuario1(user: Usuario): Observable<any> {
    this.listaTodosUsuarios().subscribe(
      x => {
        user.id = x[x.length-1].id + 1
        console.log('IuserItem = ',x[x.length-1].id + 1)
      }
    )
    console.log('user create: ',user)
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(user);
    return this.httpClient.post<Usuario>(this.url, body, {'headers':headers});
  }

  async criarUsuario(user: Usuario): Promise<any>{
    console.log('1');
    let x = await this.listaTodosUsuarios().toPromise()

    console.log(x[x.length-1].id + 1);
    console.log('3');
    console.log('user create: ',user)
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(user);
    console.log('4');
    return this.httpClient.post<Usuario>(this.url, body, {'headers':headers});
  }

}
