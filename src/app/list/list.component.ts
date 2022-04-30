import { Component, OnInit } from '@angular/core';
import { Automovil } from 'src/app/models';
import { AutosService } from 'src/app/services/autos.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos!: Automovil[];
  autoSeleccionado!: Automovil;

  page=1;
  pageSize=10;
  // constructor() {
  // }
  constructor(private modalService: NgbModal, private autosService: AutosService) {
  }

  ngOnInit(): void {
    this.autosService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    })

  }

  onSelect(auto: Automovil){
    this.autoSeleccionado = auto;
  }

  open(content: any, auto: Automovil) {
    this.onSelect(auto);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

}
