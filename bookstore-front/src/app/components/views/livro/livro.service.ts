import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from './Livro.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

    constructor(private http: HttpClient,private _snack: MatSnackBar) { }

    baseUrl: String = environment.baseUrl;
  
    findAll(id_cat: String):Observable<Livro[]>{
      const url = `${this.baseUrl}/livros?categoria=${id_cat}`;
      return this.http.get<Livro[]>(url);
    }
  
    findById(id: String):Observable<Livro>{
      const url = `${this.baseUrl}/livros/${id}`;
      return this.http.get<Livro>(url);
    }
  
    deletar(id: String):Observable<void>{
      const url = `${this.baseUrl}/livros/${id}`;
      return this.http.delete<void>(url);
    }
  
    create(livro: Livro, id_cat: string): Observable<Livro>{
      const url = `${this.baseUrl}/livros?categoria=${id_cat}`;
      return this.http.post<Livro>(url, livro);
    }
    
    update(livro: Livro): Observable<void>{
      const url = `${this.baseUrl}/livros/${livro.id}`;
      return this.http.put<void>(url, livro);
    }
  
    mensagem(str: String): void {
      this._snack.open(`${str}`, 'OK', {
          horizontalPosition: 'end',
          verticalPosition: 'top',
          duration: 3000
      })
    }
}
