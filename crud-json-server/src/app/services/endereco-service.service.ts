import { Injectable } from '@angular/core';
import { Endereco } from '../models/endereco.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnderecoServiceService {

  private url = "http://localhost:3000/endereco";
  private endereco: Endereco[];

  constructor(private httpClient: HttpClient) {
    this.endereco = [];
  }

  buscaEnderecosPorId(id: String): Observable<Endereco>{
    let rota = `${this.url}/${id}`;
    return this.httpClient.get<Endereco>(rota);
  }
}
