import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from '../livro.service';
import { Livro } from '../Livro.model';

@Component({
  selector: 'app-livro-create',
  templateUrl: './livro-create.component.html',
  styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

    id_cat: string = '';

    livro: Livro = {
        id: '',
        titulo: '',
        nome_aut: '',
        texto: ''
    }

    titulo = new FormControl("", [Validators.minLength(3)]);
    nome_aut = new FormControl("", [Validators.minLength(3)]);
    texto = new FormControl("", [Validators.minLength(10)]);

  constructor( 
    private router: Router,
    private service: LivroService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
      this.id_cat = this.route.snapshot.paramMap.get('id_cat')!;
  }

    createLivro(): void {
        this.service.create(this.livro, this.id_cat).subscribe( r=> {
            this.router.navigate([`categorias/${this.id_cat}/livros`]);
            this.service.mensagem("Livro cadastrado com sucesso!");
        }, e => {
            this.router.navigate([`categorias/${this.id_cat}/livros`]);
            this.service.mensagem("Erro ao criar livro");
    })

  }

  getMessage() {
    if(this.titulo.invalid ){
        return "O campo TITULO deve conter entre 3 e 100 caracteres";
    }
    if(this.nome_aut.invalid ){
        return "O campo AUTOR deve conter entre 3 e 100 caracteres";
    }
    if( this.texto.invalid){
        return "O campo TEXTO deve conter entre 10 e 1000000 caracteres";
    }
    return false;
  }

  cancel(): void {
    this.router.navigate([`categorias/${this.id_cat}/livros`]);
  }

}
