import { Component } from '@angular/core';
import { UsuarioServiceService } from './services/usuario-service.service';
import { EnderecoServiceService } from './services/endereco-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-json-server';

  constructor(
    private usuarioService: UsuarioServiceService,
    private enderecoService: EnderecoServiceService
    ){}
}
