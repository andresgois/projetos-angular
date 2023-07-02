import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../categoria/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

    categoria: Categoria = {
        id: '',
        nome: '',
        descricao: ''
    }

  constructor(
    private service: CategoriaService,
    private urlPagina: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.categoria.id = this.urlPagina.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe( r => {
        console.log(r);
        this.categoria = r;
    })
  }

  cancel(): void {
    this.router.navigate(["categorias"]);
  }

  deletar(): void {
    this.service.deletar(this.categoria.id!).subscribe( r => {
        this.router.navigate(['categorias']);
        this.service.mensagem('Categoria deletada com sucesso!');
    }, e => {
            this.service.mensagem(e.error.error)
    });
  }

}
