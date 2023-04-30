import { Observable } from 'rxjs';
import { Estado } from './../../models/estado.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private url: string = environment.urlEstado;

  constructor(private httpClient: HttpClient) { }

  buscaEstadoPorID(id: number): Observable<Estado>{
    let rota = `${this.url}/${id}`;
    return this.httpClient.get<Estado>(rota);
  }

  todosEstados(): Observable<Estado[]>{
    let rota = `${this.url}`;
    return this.httpClient.get<Estado[]>(rota);
  }

}
