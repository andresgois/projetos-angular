import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../categoria/categoria.service';
import { Categoria } from '../categoria.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

    categorias: Categoria[] =[];

  displayedColumns: string[] = ['id','nome','descricao','livro', 'acoes'];

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe( r => {
        console.log(r);
        this.categorias = r;
    });
  }

  navegarParaCategoriaCreate(){
    this.router.navigate(["categorias/create"])
  }

}
