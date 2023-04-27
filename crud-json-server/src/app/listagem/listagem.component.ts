import { Usuario } from './../models/usuario.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UsuarioServiceService } from '../services/usuario-service.service';
import { EnderecoServiceService } from '../services/endereco-service.service';
import { Subject } from 'rxjs';

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
  usuario?: Usuario = undefined;

  constructor(private service: UsuarioServiceService,
    private serviceEnde: EnderecoServiceService) { }

  ngOnInit(): void {
    this.listaTodosUsuarios();
  }

  onSumit(){
    console.log("On Submit");
  }

  listaTodosUsuarios(){
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
    //console.log("showModal")
    this.listaTodosUsuarios();
    this.toggleModal()
  }

  toggle(){
    this.mostrar = !this.mostrar;
  }

  toggleModal(){
    this.openModal = !this.openModal;
  }

  detalhes(u: Usuario){
    this.usuario = u;
    this.toggle();
  }

  editar(u: Usuario){
    console.log("Editar")
    console.log("Editar: ", u)
    this.usuario = u;
    this.toggleModal();
  }

  delete(u: Usuario){
    console.log(u.id);
    this.serviceEnde.deletar(u.endereco_id).subscribe(
      x => {
        this.service.deletar(u.id).subscribe(
          x => {
            this.listaTodosUsuarios();
          }
        );
      }
    );
  }

  novo(user: Usuario | null ){
    console.log("novo")
    this.usuario = undefined
    this.toggleModal();
  }

}
