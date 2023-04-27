import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { User } from 'src/app/class/usuario-full';
import { Estado } from 'src/app/models/estado.model';
import { EnderecoServiceService } from 'src/app/services/endereco-service.service';
import { EstadoService } from 'src/app/services/estado/estado.service';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { Subject } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
@Component({
  selector: 'app-modalgeral',
  templateUrl: './modalgeral.component.html',
  styleUrls: ['./modalgeral.component.scss']
})
export class ModalgeralComponent implements OnInit {

  @Output() public aoClicarModal = new EventEmitter();
  @Input() openModalInput!: Boolean;
  @Input() edit?: Usuario;
  estados?: Estado[] = [];
  user = new User();
  private listReady = new Subject();

  constructor(
    private serviceUser: UsuarioServiceService,
    private serviceEnder: EnderecoServiceService,
    private serviceEstado: EstadoService,
    ) { }

  ngOnInit(): void {
    console.log("ngOnInit")
    if(this.edit){
      console.log("edit", this.edit)
      this.user.nome = this.edit!.nome;
      this.user.profissao = this.edit!.profissao;
      this.serviceEnder.buscaEnderecosPorId(this.edit.endereco_id!.toString()).subscribe(
        end => {
          console.log(end)
          this.user.rua = end.rua
          this.user.numero = end.numero
        }
      )
      this.serviceEstado.buscaEstadoPorID(this.edit.estado_id!.toString()).subscribe(
        est => {
          console.log(est)
          this.user.sigla
        }
      )
    }

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
    console.log("onSubmit: ",this.edit);
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
