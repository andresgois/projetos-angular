import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modalgeral',
  templateUrl: './modalgeral.component.html',
  styleUrls: ['./modalgeral.component.scss']
})
export class ModalgeralComponent implements OnInit {

  @Output() public aoClicarModal = new EventEmitter();
  @Input() openModalInput!: Boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public modalStatus(e: object) {
    //console.log(this.openModalInput)
    this.aoClicarModal.emit(this.openModalInput);
  }
}
