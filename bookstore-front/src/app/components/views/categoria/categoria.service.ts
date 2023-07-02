import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../categorias/categoria.model';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient,private _snack: MatSnackBar) { }

  baseUrl: String = environment.baseUrl;

  findAll():Observable<Categoria[]>{
    const url = `${this.baseUrl}/categorias`;
    return this.http.get<Categoria[]>(url);
  }

  create(categoria: Categoria): Observable<Categoria>{
    const url = `${this.baseUrl}/categorias`;
    return this.http.post<Categoria>(url, categoria);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000
    })
  }
}
