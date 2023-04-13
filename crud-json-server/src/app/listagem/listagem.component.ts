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

  //id: string = "";
  usuarios: Usuario[] = [];
  constructor(private service: UsuarioServiceService, private serviceEndereco: EnderecoServiceService) { }

  ngOnInit(): void {
    this.service.listaTodosUsuarios().subscribe(
      (usuario: Usuario[]) => {
        console.table(usuario);
        console.log(usuario[0].estado_id);
        this.usuarios = usuario;
      }
    )
  }

  /*capturaId(){
    this.aoClicar.emit({id: this.id});
    console.log("aqui")
  }*/

  editar(u: Usuario){
    console.log(u);
    console.log(u.endereco_id);
    let id: String = u.endereco_id.toString();
    this.serviceEndereco.buscaEnderecosPorId(id).subscribe(
      x => {
        console.log(x);
      }
    )
  }

}
