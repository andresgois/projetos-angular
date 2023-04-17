import { Estado } from './../models/estado.model';
import { Endereco } from './../models/endereco.model';
import { EnderecoServiceService } from '../services/endereco-service.service';
import { UsuarioFull } from './../models/usuario-full';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EstadoService } from '../services/estado/estado.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() public onAlert = new EventEmitter();
  //mostrar: Boolean = false;
  @Input() usuarioInput!: any
  @Input() mostrarInput!: Boolean
  usuarioFull?: UsuarioFull = {} as UsuarioFull;

  constructor(
    private serviceEndereco: EnderecoServiceService,
    private serviceEstado: EstadoService
    ) {
    /*let user = {"id":1,"nome":"Lucas","profissao":"Assitente de T.I","endereco_id":1,"estado_id":1};
    let endereco = {'id':1, 'numero':'1059', 'rua':'rua irma maria'};
    let estado = {"id":1,"estado":"Acre ","sigla":"AC"};
    this.usuarioFull!.usuario = user;*/
  }

  ngOnInit(): void {
    //this.usuarioFull!.endereco.push(endereco);
    //this.usuarioFull!.estados.push(estado);

    console.log("usuarioFull: "+this.usuarioFull)
    console.log("UsuarioInput: "+this.usuarioInput)
    this.usuarioFull!.usuario = this.usuarioInput;
    let id: String = this.usuarioInput.endereco_id.toString();

    console.log("usuarioFull: "+this.usuarioFull?.usuario.nome)
    this.serviceEndereco.buscaEnderecosPorId(id).subscribe(
      (x: Endereco) => {
        console.log(x);
        this.usuarioFull!.endereco = x;
        console.log("usuarioFull: "+this.usuarioFull)
      }
    )
    let estado_id = this.usuarioInput.estado_id.toString();
    this.serviceEstado.buscaEstadoPorID(estado_id).subscribe(
      (estado: Estado) => {
        console.log(estado)
        this.usuarioFull!.estados = estado
      }
    )
  }

  public alertEvent(e: object) {
    console.log(this.mostrarInput)
    this.onAlert.emit(this.mostrarInput);
  }

  toggle(){
    console.log("mostrar: "+this.mostrarInput)
    this.mostrarInput = !this.mostrarInput;
  }

}
