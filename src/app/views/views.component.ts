import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modals/modal-add-update/modal-add-update.component';
import { Automovil } from '../models';
import { AutosService } from '../services/autos.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css']
})
export class ViewsComponent implements OnInit {

  auto!: Automovil;

  constructor(private autosService: AutosService, private modalService: NgbModal) {
    this.auto = {};
   }

  ngOnInit(): void {
  }



  openModalAgregar(auto: Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, {centered: true})
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = "Agregar";
    modalRef.result.then(
      (auto)=>{
        this.autosService.addAuto(auto).subscribe(response=>console.log(response));
      }
    );
  }
}
