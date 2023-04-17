import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import { Estado } from 'src/app/models/estado.model';
import { EstadoService } from 'src/app/services/estado/estado.service';

@Component({
  selector: 'app-modalgeral',
  templateUrl: './modalgeral.component.html',
  styleUrls: ['./modalgeral.component.scss']
})
export class ModalgeralComponent implements OnInit {

  @Output() public aoClicarModal = new EventEmitter();
  @Input() openModalInput!: Boolean;
  estados?: Estado[] = [];

  constructor(private serviceEstado: EstadoService) { }

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
}
