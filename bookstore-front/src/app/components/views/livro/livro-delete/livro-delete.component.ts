import { Component, OnInit } from '@angular/core';
import { Livro } from '../Livro.model';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent implements OnInit {

    id_cat: string = '';

    livro: Livro = {
        id: '',
        titulo: '',
        nome_aut: '',
        texto: ''
    }
  
    constructor(
        private service: LivroService,
        private urlPagina: ActivatedRoute,
        private router: Router) { }
    
      ngOnInit(): void {
        this.livro.id = this.urlPagina.snapshot.paramMap.get('id')!;
        this.id_cat = this.urlPagina.snapshot.paramMap.get('id_cat')!;
        this.findById();
      }
    
      findById(): void {
        this.service.findById(this.livro.id!).subscribe( r => {
            console.log(r);
            this.livro = r;
        })
      }
    
      cancel(): void {
        console.log('id_cat '+this.id_cat)
        this.router.navigate([`categorias/${this.id_cat}/livros`]);
      }
    
      deletar(): void {
        this.service.deletar(this.livro.id!).subscribe( r => {
            this.router.navigate([`categorias/${this.id_cat}/livros`]);
            this.service.mensagem('Livro deletada com sucesso!');
        }, e => {
            this.router.navigate([`categorias/${this.id_cat}/livros`]);
            this.service.mensagem(e.error.error)
        });
      }

}
