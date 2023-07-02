import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {
  displayedColumns: string[] = ['id','nome','descricao', 'acoes'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
