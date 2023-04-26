import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { User } from 'src/app/class/usuario-full';
import { Estado } from 'src/app/models/estado.model';
import { EnderecoServiceService } from 'src/app/services/endereco-service.service';
import { EstadoService } from 'src/app/services/estado/estado.service';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { Subject } from 'rxjs';
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
  private listReady = new Subject();

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
    console.log("modalStatus")
    this.aoClicarModal.emit(this.openModalInput);
  }

  onSubmit(){
    const endereco = { rua: this.user.rua, numero: this.user.numero};

    this.serviceEnder.enderecoPost(endereco).subscribe(
      e => {
        console.log("Endereco criado com sucesso: ", e)

        const usuario = { nome: this.user.nome, profissao: this.user.profissao, endereco_id: e.id, estado_id: parseInt(this.user.estado)};
        this.serviceUser.usuarioPost(usuario).subscribe(
          u => {
            console.log("Usuario criado com sucesso: ", u)
            this.aoClicarModal.emit(this.openModalInput);
            this.listReady.next('ready');
          }
        )
      }
      );
  }
}
