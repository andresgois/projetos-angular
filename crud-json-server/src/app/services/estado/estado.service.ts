import { Observable } from 'rxjs';
import { Estado } from './../../models/estado.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private url = "http://localhost:3000/estados";

  constructor(private httpClient: HttpClient) { }

  buscaEstadoPorID(id: String): Observable<Estado>{
    let rota = `${this.url}/${id}`;
    return this.httpClient.get<Estado>(rota);
  }

  todosEstados(): Observable<Estado[]>{
    let rota = `${this.url}`;
    return this.httpClient.get<Estado[]>(rota);
  }

}
