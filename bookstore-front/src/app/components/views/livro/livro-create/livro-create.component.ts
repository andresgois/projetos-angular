import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

    titulo = new FormControl("", [Validators.minLength(3)]);
    nome_autor = new FormControl("", [Validators.minLength(3)]);
    texto = new FormControl("", [Validators.minLength(10)]);

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  getMessage() {
    if(this.titulo.invalid ){
        return "O campo TITULO deve conter entre 3 e 100 caracteres";
    }
    if(this.nome_autor.invalid || this.nome_autor.invalid || this.texto.invalid){
        return "O campo AUTOR deve conter entre 3 e 100 caracteres";
    }
    if( this.texto.invalid){
        return "O campo TEXTO deve conter entre 10 e 1000000 caracteres";
    }
    return false;
  }

  cancel(): void {
    //this.router.navigate([`categorias/${id}//livros`]);
  }

}
