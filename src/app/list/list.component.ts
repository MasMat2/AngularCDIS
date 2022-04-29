import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/app/models';
import { AUTOMOVILES } from 'src/app/data';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos!: Automovil[];
  autoSeleccionado!: Automovil;

  // constructor() {
  // }
  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }

  onSelect(auto: Automovil){
    this.autoSeleccionado = auto;
  }

  open(content: any, auto: Automovil) {
    this.onSelect(auto);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
