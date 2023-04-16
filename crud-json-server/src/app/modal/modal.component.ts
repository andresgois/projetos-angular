import { Endereco } from './../models/endereco.model';
import { EnderecoServiceService } from '../services/endereco-service.service';
import { Usuario } from './../models/usuario.model';
import { UsuarioFull } from './../models/usuario-full';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() public onAlert = new EventEmitter();
  //mostrar: Boolean = false;
  @Input() usuarioInput?: any
  @Input() mostrarInput?: Boolean
  usuarioFull?: UsuarioFull

  constructor(private serviceEndereco: EnderecoServiceService) {
    this.usuarioFull?.endereco;
    this.usuarioFull?.usuario;
    this.usuarioFull?.estados;
  }

  ngOnInit(): void {
    console.log("UsuarioInput: "+this.usuarioInput)
    this.usuarioFull?.usuario.push(this.usuarioInput);
    let id: String = this.usuarioInput.endereco_id.toString();
    this.serviceEndereco.buscaEnderecosPorId(id).subscribe(
      x => {
        console.log(x);
        this.usuarioFull?.endereco.push(x)
        console.log("usuarioFull: "+this.usuarioFull)
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
