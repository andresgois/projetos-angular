import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../services/usuario-service.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private service: UsuarioServiceService) { }

  ngOnInit(): void {
    this.service.listaTodosUsuarios().subscribe(
      (usuario: Usuario[]) => {
        console.table(usuario);
        this.usuarios = usuario;
      }
    )
  }

}
