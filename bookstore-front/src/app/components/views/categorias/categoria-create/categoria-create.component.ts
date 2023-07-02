import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../categoria/categoria.service';
import { Categoria } from '../categoria.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

    categoria: Categoria = {
        nome: '',
        descricao: ''
    }


  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.categoria).subscribe( r => {
        this.router.navigate(['categorias']);
        this.service.mensagem('Categoria criada com sucesso!');
    }, e => {
        for(let i=0; i < e.error.errors.length; i++) {
            this.service.mensagem(e.error.errors[i].message)
        }
    });
  }

  cancel(): void {
    this.router.navigate(["categorias"]);
  }

}
