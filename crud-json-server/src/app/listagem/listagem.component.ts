import { Usuario } from './../models/usuario.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UsuarioServiceService } from '../services/usuario-service.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  @Output() aoClicar = new EventEmitter<any>();
  mostrar: Boolean = false;
  openModal: Boolean = false;
  usuarios: Usuario[] = [];
  usuario?: Usuario;

  constructor(private service: UsuarioServiceService) { }

  ngOnInit(): void {
    this.service.listaTodosUsuarios().subscribe(
      (usuario: Usuario[]) => {
        this.usuarios = usuario;
      }
    )
  }

  public alerta(e:Boolean) {
    this.toggle()
  }
  public showModal(e:Boolean) {
    this.toggleModal()
  }

  toggle(){
    this.mostrar = !this.mostrar;
  }

  toggleModal(){
    this.openModal = !this.openModal;
  }

  editar(u: Usuario){
    this.usuario = u;
    this.toggle();
  }

  novo(user: Usuario | null ){
    this.toggleModal();
  }

}
