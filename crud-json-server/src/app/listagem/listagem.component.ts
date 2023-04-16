import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UsuarioServiceService } from '../services/usuario-service.service';
import { Usuario } from '../models/usuario.model';
import { EnderecoServiceService } from '../services/endereco-service.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  @Output() aoClicar = new EventEmitter<any>();
  mostrar: Boolean = false;
  usuarios: Usuario[] = [];
  usuario?: Usuario;

  constructor(private service: UsuarioServiceService) { }

  ngOnInit(): void {
    this.service.listaTodosUsuarios().subscribe(
      (usuario: Usuario[]) => {
        //console.table(usuario);
        //console.log(usuario[0].estado_id);
        this.usuarios = usuario;
      }
    )
  }

  public alerta(e:Boolean) {
    this.toggle()
  }

  toggle(){
    this.mostrar = !this.mostrar;
  }

  editar(u: Usuario){
    this.usuario = u;
    this.toggle();
  }

}
