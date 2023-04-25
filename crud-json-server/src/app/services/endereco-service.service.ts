import { Injectable } from '@angular/core';
import { Endereco } from '../models/endereco.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnderecoServiceService {

  private url = "http://localhost:3000/endereco";

  constructor(private httpClient: HttpClient) {
  }

  buscarTodosEnderecos(): Observable<Endereco[]>{
    return this.httpClient.get<Endereco[]>(this.url);
  }

  buscaEnderecosPorId(id: String): Observable<Endereco>{
    let rota = `${this.url}/${id}`;
    return this.httpClient.get<Endereco>(rota);
  }

  enderecoPost(e: Endereco): Observable<Endereco>{
    console.log("post e")
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(e);
    return this.httpClient.post<Endereco>(this.url, body, {'headers': headers})
  }
}
