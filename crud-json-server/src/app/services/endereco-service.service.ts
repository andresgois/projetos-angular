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

  buscaEnderecosPorId(id: String): Observable<Endereco>{
    let rota = `${this.url}/${id}`;
    return this.httpClient.get<Endereco>(rota);
  }

  criarEndereco(ender: Endereco): Observable<Endereco>{
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(ender);
    return this.httpClient.post<Endereco>(this.url, body, {'headers':headers});
  }
}
