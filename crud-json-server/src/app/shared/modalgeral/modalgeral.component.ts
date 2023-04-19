import { Endereco } from './../../models/endereco.model';
import { UsuarioFull } from './../../models/usuario-full';
import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { User } from 'src/app/class/usuario-full';
import { Estado } from 'src/app/models/estado.model';
import { Usuario } from 'src/app/models/usuario.model';
import { EnderecoServiceService } from 'src/app/services/endereco-service.service';
import { EstadoService } from 'src/app/services/estado/estado.service';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-modalgeral',
  templateUrl: './modalgeral.component.html',
  styleUrls: ['./modalgeral.component.scss']
})
export class ModalgeralComponent implements OnInit {

  @Output() public aoClicarModal = new EventEmitter();
  @Input() openModalInput!: Boolean;
  estados?: Estado[] = [];
  user = new User();

  constructor(
    private serviceUser: UsuarioServiceService,
    private serviceEnder: EnderecoServiceService,
    private serviceEstado: EstadoService,
    ) { }

  ngOnInit(): void {
    this.serviceEstado.todosEstados().subscribe(
      (est: Estado[]) => {
        this.estados = est;
      }
    )
  }

  public modalStatus(e: object) {
    this.aoClicarModal.emit(this.openModalInput);
  }

  onSubmit(){
    console.log('aqui')
    console.log('user: ', this.user)
    const ender: Endereco = { id: 3, rua: this.user.rua, numero: this.user.numero};
    const user1: Usuario = { id: 6, nome: this.user.nome, profissao: this.user.profissao, endereco_id: 2, estado_id: parseInt(this.user.estado)};
    this.serviceEnder.criarEndereco(ender).subscribe(
      (data) => {
        console.log(data)
      }
    );
    this.serviceUser.criarUsuario(user1).subscribe(
      (data) => {
        console.log(data)
      }
    );
    this.aoClicarModal.emit(this.openModalInput);
  }
}
