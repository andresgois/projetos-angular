import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../../categoria/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

    categoria: Categoria = {
        id: '',
        nome: '',
        descricao: ''
    }

  constructor(private service: CategoriaService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe( r => {
        this.categoria = r;
        console.log(r)
    });
  }

  update(): void {
    this.service.update(this.categoria).subscribe(  r => {
        this.router.navigate(['categorias']);
        this.service.mensagem('Categoria atualizada com sucesso!');
    }, err => {
        this.service.mensagem('Validar se todos os campos estão preenchido corretamente!');
        console.log(err);
    });
  }

  cancel(): void {
    this.router.navigate(["categorias"]);
  }

}
