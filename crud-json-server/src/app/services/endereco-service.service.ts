import { Injectable } from '@angular/core';
import { Endereco } from '../models/endereco.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnderecoServiceService {

  private url: string = environment.urlEndereco;
  private header = { 'content-type': 'application/json'};

  constructor(private httpClient: HttpClient) {}

  buscarTodosEnderecos(): Observable<Endereco[]>{
    return this.httpClient.get<Endereco[]>(this.url);
  }

  buscaEnderecosPorId(id: String): Observable<Endereco>{
    let rota = `${this.url}/${id}`;
    return this.httpClient.get<Endereco>(rota);
  }

  enderecoPost(e: Endereco): Observable<Endereco>{
    const body=JSON.stringify(e);
    return this.httpClient.post<Endereco>(this.url, body, {'headers': this.header})
  }
  editarEndereco(e: Endereco): Observable<Endereco>{
    let id = e.id;
    const body=JSON.stringify(e);
    return this.httpClient.put<Endereco>(`${this.url}/${id}`, body, {'headers': this.header})
  }

  deletar(endereco_id: number | undefined) {
    return this.httpClient.delete(`${this.url}/${endereco_id}`, {'headers': this.header});
  }
}
