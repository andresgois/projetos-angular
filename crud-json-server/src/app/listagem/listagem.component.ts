import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UsuarioServiceService } from '../services/usuario-service.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  @Output() aoClicar = new EventEmitter<any>();

  id: string = "";
  usuarios: Usuario[] = [];
  constructor(private service: UsuarioServiceService) { }

  ngOnInit(): void {
    this.service.listaTodosUsuarios().subscribe(
      (usuario: Usuario[]) => {
        console.table(usuario);
        console.log(usuario[0].estado_id);
        this.usuarios = usuario;
      }
    )
  }

  capturaId(){
    console.log("Captura");
    console.log(this.aoClicar);
  }

}
