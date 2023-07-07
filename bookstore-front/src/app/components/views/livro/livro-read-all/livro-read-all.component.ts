import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../Livro.model';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent implements OnInit {

    displayedColumns: string[] = ['id','titulo','livros', 'acoes'];
    id_cat: string = '';
    livros: Livro[] = [];

    constructor(private service: LivroService, private router: Router, private route: ActivatedRoute) { }
  
    ngOnInit(): void {
        this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
      this.findAll();
    }
  
    findAll(){
      this.service.findAll(this.id_cat).subscribe( r => {
          console.log(r);
          this.livros = r;
      });
    }

    navegarParaCriarLivro(): void {
        this.router.navigate([`categorias/${this.id_cat}/livros/create`]);
    }
  
    navegarParaCategoriaCreate(){
      this.router.navigate(["livros/create"])
    }

}
