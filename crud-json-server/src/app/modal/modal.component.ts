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
    ) {  }

  ngOnInit(): void {
    this.usuarioFull!.usuario = this.usuarioInput;
    let id: String = this.usuarioInput.endereco_id.toString();

    this.serviceEndereco.buscaEnderecosPorId(id).subscribe(
      (x: Endereco) => {
        this.usuarioFull!.endereco = x;
      }
    )
    let estado_id = this.usuarioInput.estado_id;
    this.serviceEstado.buscaEstadoPorID(estado_id).subscribe(
      (estado: Estado) => {
        this.usuarioFull!.estados = estado
      },
      err => console.log("Error: ",err.message)
    )
  }

  public alertEvent(e: object) {
    this.onAlert.emit(this.mostrarInput);
  }

  toggle(){
    console.log("mostrar: "+this.mostrarInput)
    this.mostrarInput = !this.mostrarInput;
  }

}
