import { Component } from '@angular/core';
import { UsuarioServiceService } from './services/usuario-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-json-server';

  constructor(private service: UsuarioServiceService){}
}
